import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { chartColor, round, type ChartSegment } from '../charts/chart.data';

const SIZE = 100;
const CENTER = SIZE / 2;
const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface DonutSlice {
  readonly id: string;
  readonly label: string;
  readonly color: string;
  readonly shareText: string;
  readonly dasharray: string;
  readonly dashoffset: number;
}

function buildSlices(segments: readonly ChartSegment[]): DonutSlice[] {
  const visible = segments.filter((segment) => segment.value > 0);
  const total = visible.reduce((sum, segment) => sum + segment.value, 0);
  if (total <= 0) {
    return [];
  }

  let offset = 0;
  return visible.map((segment, index) => {
    const share = segment.value / total;
    const length = round(share * CIRCUMFERENCE);
    const remainder = round(CIRCUMFERENCE - length);
    const slice: DonutSlice = {
      id: segment.id,
      label: segment.label,
      color: chartColor(segment, index),
      shareText: segment.display ?? `${Math.round(share * 100)}%`,
      dasharray: `${length} ${remainder}`,
      dashoffset: round(-offset),
    };
    offset += length;
    return slice;
  });
}

/**
 * A ring / donut chart with a centered figure and an optional legend.
 * Segments are drawn clockwise starting at the top.
 */
@Component({
  selector: 'app-donut-chart',
  template: `
    <div
      class="donut"
      role="img"
      [attr.aria-label]="ariaLabel()"
    >
      <div class="donut-ring">
        <svg [attr.viewBox]="viewBox">
          <circle
            class="donut-track"
            [attr.cx]="center"
            [attr.cy]="center"
            [attr.r]="radius"
            [attr.stroke-width]="thickness()"
            fill="none"
          />
          <g transform="rotate(-90 50 50)">
            @for (slice of slices(); track slice.id) {
              <circle
                [attr.cx]="center"
                [attr.cy]="center"
                [attr.r]="radius"
                fill="none"
                [attr.stroke]="slice.color"
                [attr.stroke-width]="thickness()"
                [attr.stroke-dasharray]="slice.dasharray"
                [attr.stroke-dashoffset]="slice.dashoffset"
              />
            }
          </g>
        </svg>
        <div class="donut-center">
          <span class="donut-value">{{ centerValue() }}</span>
          @if (centerCaption()) {
            <span class="donut-caption">{{ centerCaption() }}</span>
          }
        </div>
      </div>
      @if (showLegend()) {
        <ul class="legend">
          @for (slice of slices(); track slice.id) {
            <li class="legend-item">
              <i
                class="legend-swatch"
                [style.background]="slice.color"
              ></i>
              <span class="legend-label">{{ slice.label }}</span>
              <span class="legend-share">{{ slice.shareText }}</span>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .donut {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .donut-ring {
      position: relative;
      align-self: center;
      width: 100%;
      max-width: 180px;
    }

    .donut-ring svg {
      display: block;
      width: 100%;
      height: auto;
    }

    .donut-track {
      stroke: var(--md-sys-color-surface-container-highest);
    }

    .donut-center {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      text-align: center;
    }

    .donut-value {
      color: var(--md-sys-color-on-surface);
      font-size: 28px;
      font-weight: 500;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }

    .donut-caption {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .legend {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
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
export class DonutChartComponent {
  readonly segments = input<readonly ChartSegment[]>([]);
  readonly centerValue = input('');
  readonly centerCaption = input('');
  readonly thickness = input(14);
  readonly showLegend = input(true);
  readonly ariaLabel = input('Donut chart');

  protected readonly center = CENTER;
  protected readonly radius = RADIUS;
  protected readonly viewBox = `0 0 ${SIZE} ${SIZE}`;
  protected readonly slices = computed(() => buildSlices(this.segments()));
}
