import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { COUNTRY_LIFE_EXPECTANCY, WORLD_AVERAGE_LIFE_EXPECTANCY } from '../../models/life-expectancy.data';
import { cumulativeAt, DEFAULT_PERCEIVED_TIME_SCALE } from '../../models/life-model';
import { ThemeService } from '../../states/theme.service';

const CurveHeight = 26;
const AgeTickStep = 20;

interface OverlayLabel {
  readonly element: HTMLElement;
  readonly position: THREE.Vector3;
}

interface Disposable {
  dispose(): void;
}

function resolveCssColor(variable: string, fallback: string): THREE.Color {
  const probe = document.createElement('span');
  probe.style.color = `var(${variable})`;
  probe.style.display = 'none';
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  return new THREE.Color(resolved || fallback);
}

@Component({
  selector: 'app-life-chart',
  template: `
    <div
      #container
      class="chart"
    >
      @if (unavailable()) {
        <p class="fallback">
          This 3D chart needs WebGL, which is not available in this browser.
        </p>
      }
      <div
        #overlay
        class="overlay"
      ></div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .chart {
      position: relative;
      width: 100%;
      height: 420px;
      border-radius: 24px;
      overflow: hidden;
      background: var(--md-sys-color-surface-container-lowest);
      touch-action: none;
    }

    .overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .fallback {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 24px;
      text-align: center;
      color: var(--md-sys-color-on-surface-variant);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeChartComponent {
  readonly age = input(0);
  readonly lifespan = input(80);
  readonly countryCode = input('');

  protected readonly unavailable = signal(false);

  private readonly theme = inject(ThemeService);
  private readonly containerRef = viewChild.required<ElementRef<HTMLDivElement>>('container');
  private readonly overlayRef = viewChild.required<ElementRef<HTMLDivElement>>('overlay');

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private controls?: OrbitControls;
  private chartGroup?: THREE.Group;
  private frameId = 0;
  private resizeObserver?: ResizeObserver;
  private readonly labels: OverlayLabel[] = [];
  private readonly disposables: Disposable[] = [];
  private readonly scale = DEFAULT_PERCEIVED_TIME_SCALE;

  constructor() {
    afterNextRender(() => this.setup());

    effect(() => {
      // Rebuild whenever the inputs or the color scheme change.
      this.age();
      this.lifespan();
      this.countryCode();
      this.theme.isDark();
      this.rebuild();
    });

    inject(DestroyRef).onDestroy(() => this.teardown());
  }

  private setup(): void {
    const container = this.containerRef().nativeElement;
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;

    try {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      this.unavailable.set(true);
      return;
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height, false);
    container.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    const maxAge = this.maxAge();
    this.camera.position.set(maxAge * 0.5, CurveHeight * 1.35, maxAge * 0.95);
    this.camera.lookAt(maxAge * 0.5, CurveHeight * 0.4, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minPolarAngle = 0.2;
    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.minDistance = maxAge * 0.5;
    this.controls.maxDistance = maxAge * 2.2;
    this.controls.target.set(maxAge * 0.5, CurveHeight * 0.4, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 1.6);
    const directional = new THREE.DirectionalLight(0xffffff, 2.2);
    directional.position.set(maxAge * 0.4, CurveHeight * 2, maxAge * 0.6);
    this.scene.add(ambient, directional);

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(container);

    this.rebuild();
    this.render();
  }

  private rebuild(): void {
    if (!this.scene || !this.controls) {
      return;
    }

    this.clearChart();

    const maxAge = this.maxAge();
    const total = cumulativeAt(maxAge, this.scale);
    const yAt = (age: number) => (cumulativeAt(age, this.scale) / total) * CurveHeight;

    const primary = resolveCssColor('--md-sys-color-primary', '#5f692e');
    const tertiary = resolveCssColor('--md-sys-color-tertiary', '#78622a');
    const outline = resolveCssColor('--md-sys-color-outline-variant', '#babaa9');
    const surfaceVariant = resolveCssColor('--md-sys-color-surface-variant', '#e9e9d7');

    const group = new THREE.Group();
    this.chartGroup = group;
    this.scene.add(group);

    // Ground grid.
    const grid = new THREE.GridHelper(maxAge, Math.round(maxAge / 5), outline, surfaceVariant);
    grid.position.set(maxAge / 2, 0, 0);
    const gridMaterials = Array.isArray(grid.material) ? grid.material : [grid.material];
    gridMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0.35;
    });
    group.add(grid);

    // Perceived-time curve.
    const curvePoints: THREE.Vector3[] = [];
    for (let age = 0; age <= maxAge; age += 1) {
      curvePoints.push(new THREE.Vector3(age, yAt(age), 0));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tube = new THREE.TubeGeometry(curve, 240, 0.16, 10, false);
    const curveMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      roughness: 0.4,
      metalness: 0.1,
      emissive: primary.clone().multiplyScalar(0.15),
    });
    group.add(new THREE.Mesh(tube, curveMaterial));
    this.disposables.push(tube, curveMaterial);

    // Filled area under the curve.
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    curvePoints.forEach((point) => shape.lineTo(point.x, point.y));
    shape.lineTo(maxAge, 0);
    shape.closePath();
    const areaGeometry = new THREE.ShapeGeometry(shape);
    const areaMaterial = new THREE.MeshBasicMaterial({
      color: primary,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const area = new THREE.Mesh(areaGeometry, areaMaterial);
    area.position.z = -0.05;
    group.add(area);
    this.disposables.push(areaGeometry, areaMaterial);

    // Age ticks + labels.
    for (let age = 0; age <= maxAge; age += AgeTickStep) {
      const tickGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(age, 0, 0),
        new THREE.Vector3(age, 0.5, 0),
      ]);
      const tickMaterial = new THREE.LineBasicMaterial({ color: outline, transparent: true, opacity: 0.7 });
      group.add(new THREE.Line(tickGeometry, tickMaterial));
      this.disposables.push(tickGeometry, tickMaterial);
      this.addLabel(`${age}`, new THREE.Vector3(age, -0.5, 0), 'axis');
    }

    // World average marker.
    const worldY = yAt(WORLD_AVERAGE_LIFE_EXPECTANCY);
    const worldLineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(WORLD_AVERAGE_LIFE_EXPECTANCY, 0, 0),
      new THREE.Vector3(WORLD_AVERAGE_LIFE_EXPECTANCY, worldY, 0),
    ]);
    const worldLineMaterial = new THREE.LineDashedMaterial({
      color: tertiary,
      dashSize: 0.5,
      gapSize: 0.35,
    });
    const worldLine = new THREE.Line(worldLineGeometry, worldLineMaterial);
    worldLine.computeLineDistances();
    group.add(worldLine);
    this.disposables.push(worldLineGeometry, worldLineMaterial);
    this.addLabel(`World avg · ${WORLD_AVERAGE_LIFE_EXPECTANCY}`, new THREE.Vector3(WORLD_AVERAGE_LIFE_EXPECTANCY, worldY + 1.6, 0), 'country');

    // Country average markers.
    COUNTRY_LIFE_EXPECTANCY.forEach((country) => {
      const isSelected = country.code === this.countryCode();
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(isSelected ? 0.6 : 0.28, 16, 16),
        new THREE.MeshStandardMaterial({
          color: isSelected ? primary : tertiary,
          roughness: 0.5,
          emissive: isSelected ? primary.clone().multiplyScalar(0.2) : new THREE.Color(0x000000),
        }),
      );
      marker.position.set(country.lifeExpectancy, yAt(country.lifeExpectancy), 0);
      group.add(marker);
      if (isSelected) {
        this.addLabel(`${country.name} · ${country.lifeExpectancy}`, marker.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 'country');
      }
    });

    // User marker.
    const userAge = this.clampAge(this.age(), maxAge);
    const userPosition = new THREE.Vector3(userAge, yAt(userAge), 0);
    const userGeometry = new THREE.SphereGeometry(0.9, 24, 24);
    const userMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      roughness: 0.3,
      metalness: 0.2,
      emissive: primary.clone().multiplyScalar(0.35),
    });
    const userMarker = new THREE.Mesh(userGeometry, userMaterial);
    userMarker.position.copy(userPosition);
    group.add(userMarker);
    this.disposables.push(userGeometry, userMaterial);

    const dropGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(userAge, 0, 0),
      userPosition,
    ]);
    const dropMaterial = new THREE.LineBasicMaterial({ color: primary, transparent: true, opacity: 0.6 });
    group.add(new THREE.Line(dropGeometry, dropMaterial));
    this.disposables.push(dropGeometry, dropMaterial);

    this.addLabel(`You · ${userAge.toFixed(1)}`, userPosition.clone().add(new THREE.Vector3(0, 1.6, 0)), 'user');
  }

  private addLabel(text: string, position: THREE.Vector3, kind: 'axis' | 'user' | 'country'): void {
    const element = document.createElement('span');
    element.textContent = text;
    Object.assign(element.style, {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      padding: '2px 8px',
      borderRadius: '999px',
      fontSize: '11px',
      fontWeight: '500',
      whiteSpace: 'nowrap',
      lineHeight: '1.4',
    });

    if (kind === 'user') {
      element.style.color = 'var(--md-sys-color-on-primary)';
      element.style.background = 'var(--md-sys-color-primary)';
    } else if (kind === 'country') {
      element.style.color = 'var(--md-sys-color-on-surface)';
      element.style.background = 'var(--md-sys-color-surface-container-highest)';
    } else {
      element.style.color = 'var(--md-sys-color-on-surface-variant)';
      element.style.background = 'transparent';
    }

    this.overlayRef().nativeElement.appendChild(element);
    this.labels.push({ element, position });
  }

  private render = (): void => {
    this.frameId = requestAnimationFrame(this.render);
    if (!this.renderer || !this.scene || !this.camera || !this.controls) {
      return;
    }
    this.controls.update();
    this.updateLabels();
    this.renderer.render(this.scene, this.camera);
  };

  private updateLabels(): void {
    if (!this.camera) {
      return;
    }
    const width = this.renderer?.domElement.clientWidth ?? 0;
    const height = this.renderer?.domElement.clientHeight ?? 0;
    for (const label of this.labels) {
      const projected = label.position.clone().project(this.camera);
      const visible = projected.z < 1;
      label.element.style.display = visible ? 'block' : 'none';
      label.element.style.left = `${((projected.x + 1) / 2) * width}px`;
      label.element.style.top = `${((1 - projected.y) / 2) * height}px`;
    }
  }

  private handleResize(): void {
    if (!this.renderer || !this.camera) {
      return;
    }
    const container = this.containerRef().nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) {
      return;
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private maxAge(): number {
    return Math.max(110, Math.ceil(this.lifespan() / 10) * 10 + 10);
  }

  private clampAge(age: number, maxAge: number): number {
    return Math.min(Math.max(age, 0), maxAge);
  }

  private clearChart(): void {
    for (const label of this.labels) {
      label.element.remove();
    }
    this.labels.length = 0;
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
    this.disposables.length = 0;
    if (this.chartGroup && this.scene) {
      this.scene.remove(this.chartGroup);
      this.chartGroup.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose?.();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose());
        } else {
          material?.dispose?.();
        }
      });
      this.chartGroup = undefined;
    }
  }

  private teardown(): void {
    cancelAnimationFrame(this.frameId);
    this.resizeObserver?.disconnect();
    this.clearChart();
    this.controls?.dispose();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}
