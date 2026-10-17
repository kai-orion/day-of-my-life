import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { chartColor, round, type ChartSegment } from '../charts/chart.data';

const SIZE = 100;
const CENTER = SIZE / 2;
const RADIUS = 42;

interface PieSlice {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly color: string;
  readonly shareText: string;
  /** `'circle'` marks a single slice that fills the whole pie. */
  readonly path: string;
}

function polar(radius: number, angleDeg: number): { x: number; y: number } {
  const radians = (angleDeg * Math.PI) / 180;
  return {
    x: round(CENTER + radius * Math.cos(radians)),
    y: round(CENTER + radius * Math.sin(radians)),
  };
}

function buildSlices(segments: readonly ChartSegment[]): PieSlice[] {
  const visible = segments.filter((segment) => segment.value > 0);
  const total = visible.reduce((sum, segment) => sum + segment.value, 0);
  if (total <= 0) {
    return [];
  }

  let angle = -90;
  return visible.map((segment, index) => {
    const share = segment.value / total;
    const sweep = share * 360;
    const start = angle;
    const end = angle + sweep;
    angle = end;

    const color = chartColor(segment, index);
    const shareText = segment.display ?? `${Math.round(share * 100)}%`;

    if (sweep >= 359.999) {
      return { id: segment.id, label: segment.label, value: segment.value, color, shareText, path: 'circle' };
    }

    const from = polar(RADIUS, start);
    const to = polar(RADIUS, end);
    const largeArc = sweep > 180 ? 1 : 0;
    const path = `M ${CENTER} ${CENTER} L ${from.x} ${from.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${to.x} ${to.y} Z`;
    return { id: segment.id, label: segment.label, value: segment.value, color, shareText, path };
  });
}

/**
 * A filled pie chart with an optional legend. Values are plotted as shares of
 * their sum; non-positive slices are ignored.
 */
@Component({
  selector: 'app-pie-chart',
  template: `
    <figure
      class="pie"
      role="img"
      [attr.aria-label]="ariaLabel()"
    >
      <svg
        class="pie-svg"
        [attr.viewBox]="viewBox"
      >
        @for (slice of slices(); track slice.id) {
          @if (slice.path === 'circle') {
            <circle
              [attr.cx]="center"
              [attr.cy]="center"
              [attr.r]="radius"
              [attr.fill]="slice.color"
            />
          } @else {
            <path
              [attr.d]="slice.path"
              [attr.fill]="slice.color"
            />
          }
        }
      </svg>
      @if (showLegend()) {
        <figcaption class="legend">
          @for (slice of slices(); track slice.id) {
            <span class="legend-item">
              <i
                class="legend-swatch"
                [style.background]="slice.color"
              ></i>
              <span class="legend-label">{{ slice.label }}</span>
              <span class="legend-share">{{ slice.shareText }}</span>
            </span>
          }
        </figcaption>
      }
    </figure>
  `,
  styles: `
    :host {
      display: block;
    }

    .pie {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 0;
    }

    .pie-svg {
      align-self: center;
      width: 100%;
      max-width: 220px;
      height: auto;
    }

    .legend {
      display: grid;
      gap: 8px;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }

    .legend-swatch {
      flex: 0 0 auto;
      width: 10px;
      height: 10px;
      border-radius: 3px;
    }

    .legend-label {
      color: var(--md-sys-color-on-surface);
    }

    .legend-share {
      margin-left: auto;
      color: var(--md-sys-color-on-surface-variant);
      font-variant-numeric: tabular-nums;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent {
  readonly segments = input<readonly ChartSegment[]>([]);
  readonly showLegend = input(true);
  readonly ariaLabel = input('Pie chart');

  protected readonly center = CENTER;
  protected readonly radius = RADIUS;
  protected readonly viewBox = `0 0 ${SIZE} ${SIZE}`;
  protected readonly slices = computed(() => buildSlices(this.segments()));
}
