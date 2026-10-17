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
import { ThemeService } from '../../states/theme.service';

/** One row of blocks represents one year of life. */
const DaysPerRow = 365;
/** Safety cap so an extreme lifespan cannot create an unbounded instance count. */
const MaxDays = 120_000;
const BlockSize = 0.72;
const BlockHeight = 0.22;
const LabelStepYears = 10;

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

/**
 * A three-dimensional "field" of days: every block is one day of a life, laid
 * out one year per row. Days already lived glow in the primary color while the
 * remaining days recede into a quiet neutral. A beam marks today, and the
 * decade guides keep the field readable as data rather than decoration.
 */
@Component({
  selector: 'app-days-field',
  template: `
    <div
      #container
      class="field"
    >
      @if (unavailable()) {
        <p class="fallback">
          This 3D view of your days needs WebGL, which is not available in this browser.
        </p>
      }
      <div class="legend">
        <span class="legend-item"><i class="swatch swatch-lived"></i>Lived</span>
        <span class="legend-item"><i class="swatch swatch-ahead"></i>Ahead</span>
        <span class="legend-item"><i class="swatch swatch-today"></i>Today</span>
      </div>
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

    .field {
      position: relative;
      width: 100%;
      height: 480px;
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

    .legend {
      position: absolute;
      top: 16px;
      left: 16px;
      display: flex;
      gap: 16px;
      font-size: 12px;
      font-weight: 500;
      color: var(--md-sys-color-on-surface-variant);
      pointer-events: none;
    }

    .legend-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .swatch {
      width: 10px;
      height: 10px;
      border-radius: 3px;
    }

    .swatch-lived {
      background: var(--md-sys-color-primary);
    }

    .swatch-ahead {
      background: var(--md-sys-color-outline-variant);
    }

    .swatch-today {
      background: var(--md-sys-color-tertiary);
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
export class DaysFieldComponent {
  readonly livedDays = input(0);
  readonly totalDays = input(0);

  protected readonly unavailable = signal(false);

  private readonly theme = inject(ThemeService);
  private readonly containerRef = viewChild.required<ElementRef<HTMLDivElement>>('container');
  private readonly overlayRef = viewChild.required<ElementRef<HTMLDivElement>>('overlay');

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private controls?: OrbitControls;
  private fieldGroup?: THREE.Group;
  private frameId = 0;
  private resizeObserver?: ResizeObserver;
  private readonly labels: OverlayLabel[] = [];
  private readonly disposables: Disposable[] = [];

  constructor() {
    afterNextRender(() => this.setup());

    effect(() => {
      // Rebuild whenever the inputs or the color scheme change.
      this.livedDays();
      this.totalDays();
      this.theme.isDark();
      this.rebuild();
    });

    inject(DestroyRef).onDestroy(() => this.teardown());
  }

  private setup(): void {
    const container = this.containerRef().nativeElement;
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 480;

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
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 5000);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minPolarAngle = 0.12;
    this.controls.maxPolarAngle = Math.PI / 2.1;

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-120, 260, 180);
    const fill = new THREE.DirectionalLight(0xffffff, 0.8);
    fill.position.set(180, 120, -160);
    this.scene.add(ambient, key, fill);

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(container);

    this.rebuild();
    this.frameCamera();
    this.render();
  }

  private rebuild(): void {
    if (!this.scene || !this.controls) {
      return;
    }

    this.clearField();

    const { total, rows } = this.layout();
    const lived = Math.max(0, Math.min(Math.round(this.livedDays()), total));
    const offsetX = (DaysPerRow - 1) / 2;
    const offsetZ = (rows - 1) / 2;

    const primary = resolveCssColor('--md-sys-color-primary', '#5f692e');
    const aheadVariant = resolveCssColor('--md-sys-color-outline-variant', '#babaa9');
    const accent = resolveCssColor('--md-sys-color-tertiary', '#78622a');

    const group = new THREE.Group();
    this.fieldGroup = group;
    this.scene.add(group);

    const geometry = new THREE.BoxGeometry(BlockSize, BlockHeight, BlockSize);
    this.disposables.push(geometry);

    const positionAt = (index: number): THREE.Vector3 =>
      new THREE.Vector3(
        (index % DaysPerRow) - offsetX,
        BlockHeight / 2,
        Math.floor(index / DaysPerRow) - offsetZ,
      );

    // The days still ahead of you.
    const remainingCount = total - lived;
    if (remainingCount > 0) {
      const remainingMaterial = new THREE.MeshStandardMaterial({
        color: aheadVariant,
        roughness: 0.95,
        metalness: 0,
      });
      const mesh = new THREE.InstancedMesh(geometry, remainingMaterial, remainingCount);
      const matrix = new THREE.Matrix4();
      for (let index = lived; index < total; index += 1) {
        const point = positionAt(index);
        matrix.makeTranslation(point.x, point.y, point.z);
        mesh.setMatrixAt(index - lived, matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
      group.add(mesh);
      this.disposables.push(remainingMaterial);
    }

    // The days you have already lived.
    if (lived > 0) {
      const livedMaterial = new THREE.MeshStandardMaterial({
        color: primary,
        roughness: 0.35,
        metalness: 0.15,
        emissive: primary.clone().multiplyScalar(0.22),
      });
      const mesh = new THREE.InstancedMesh(geometry, livedMaterial, lived);
      const matrix = new THREE.Matrix4();
      for (let index = 0; index < lived; index += 1) {
        const point = positionAt(index);
        matrix.makeTranslation(point.x, point.y, point.z);
        mesh.setMatrixAt(index, matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
      group.add(mesh);
      this.disposables.push(livedMaterial);
    }

    // Decade guides keep the field grounded as data.
    const guidePoints: THREE.Vector3[] = [];
    for (let year = 0; year < rows; year += LabelStepYears) {
      const z = year - offsetZ;
      guidePoints.push(
        new THREE.Vector3(-offsetX - 0.8, 0.03, z),
        new THREE.Vector3(offsetX + 0.8, 0.03, z),
      );
    }
    if (guidePoints.length > 0) {
      const guideGeometry = new THREE.BufferGeometry().setFromPoints(guidePoints);
      const guideMaterial = new THREE.LineBasicMaterial({
        color: aheadVariant,
        transparent: true,
        opacity: 0.4,
      });
      group.add(new THREE.LineSegments(guideGeometry, guideMaterial));
      this.disposables.push(guideGeometry, guideMaterial);
    }

    // Today: the frontier between lived and remaining days.
    if (lived > 0 && lived < total) {
      const today = positionAt(lived);
      const accentMaterial = new THREE.MeshStandardMaterial({
        color: accent,
        roughness: 0.4,
        emissive: accent.clone().multiplyScalar(0.3),
      });
      const beamGeometry = new THREE.CylinderGeometry(0.14, 0.14, 7, 10);
      const beam = new THREE.Mesh(beamGeometry, accentMaterial);
      beam.position.set(today.x, 3.5, today.z);
      group.add(beam);

      const ringGeometry = new THREE.TorusGeometry(1.1, 0.08, 8, 40);
      const ring = new THREE.Mesh(ringGeometry, accentMaterial);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(today.x, 0.22, today.z);
      group.add(ring);

      this.disposables.push(beamGeometry, ringGeometry, accentMaterial);
      this.addLabel(`Today · ${lived.toLocaleString()} days`, new THREE.Vector3(today.x, 7.8, today.z));
    }
  }

  private layout(): { total: number; rows: number } {
    const total = Math.max(0, Math.min(Math.round(this.totalDays()), MaxDays));
    const rows = Math.max(1, Math.ceil(total / DaysPerRow));
    return { total, rows };
  }

  private frameCamera(): void {
    if (!this.camera || !this.controls) {
      return;
    }
    const { rows } = this.layout();
    const halfWidth = DaysPerRow / 2;
    const halfDepth = Math.max(rows, 4) / 2;
    const fov = THREE.MathUtils.degToRad(this.camera.fov);
    const distance =
      Math.max(halfWidth / (Math.tan(fov / 2) * this.camera.aspect), halfDepth / Math.tan(fov / 2)) *
      1.05;
    const elevation = THREE.MathUtils.degToRad(50);
    const azimuth = THREE.MathUtils.degToRad(-14);
    const horizontal = distance * Math.cos(elevation);

    this.camera.position.set(
      Math.sin(azimuth) * horizontal,
      distance * Math.sin(elevation),
      Math.cos(azimuth) * horizontal,
    );
    this.controls.minDistance = distance * 0.4;
    this.controls.maxDistance = distance * 2.4;
    this.controls.target.set(0, 0, 0);
    this.camera.lookAt(0, 0, 0);
    this.controls.update();
  }

  private addLabel(text: string, position: THREE.Vector3): void {
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

    element.style.color = 'var(--md-sys-color-on-tertiary)';
    element.style.background = 'var(--md-sys-color-tertiary)';

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

  private clearField(): void {
    for (const label of this.labels) {
      label.element.remove();
    }
    this.labels.length = 0;
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
    this.disposables.length = 0;
    if (this.fieldGroup && this.scene) {
      this.scene.remove(this.fieldGroup);
      this.fieldGroup.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose?.();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose());
        } else {
          material?.dispose?.();
        }
      });
      this.fieldGroup = undefined;
    }
  }

  private teardown(): void {
    cancelAnimationFrame(this.frameId);
    this.resizeObserver?.disconnect();
    this.clearField();
    this.controls?.dispose();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}
