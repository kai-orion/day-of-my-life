import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** One bar in a diverging chart: its value is compared against the center. */
export interface DivergingBarItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  /** Preformatted value shown at the end of the row. */
  readonly display?: string;
}

interface DivergingBar {
  readonly id: string;
  readonly label: string;
  readonly display?: string;
  readonly side: 'left' | 'right' | 'none';
  /** Width as a percentage of the whole track (max 50, i.e. out to the edge). */
  readonly percent: number;
}

/**
 * A diverging bar chart: a value is compared against a central reference and
 * bars extend left (below) or right (above) of it. The largest absolute
 * difference fills half the track.
 */
@Component({
  selector: 'app-diverging-bar-chart',
  template: `
    <div
      class="diverging"
      role="img"
      [attr.aria-label]="ariaLabel()"
    >
      <div class="axis">
        <span class="axis-side">Shorter</span>
        <span class="axis-center">{{ centerLabel() }}</span>
        <span class="axis-side axis-side--right">Longer</span>
      </div>
      @for (bar of bars(); track bar.id) {
        <div class="row">
          <div class="row-head">
            <span class="row-label">{{ bar.label }}</span>
            @if (bar.display) {
              <span class="row-value">{{ bar.display }}</span>
            }
          </div>
          <div class="track">
            <span class="center-line"></span>
            @if (bar.side !== 'none') {
              <span
                class="fill"
                [class.is-left]="bar.side === 'left'"
                [class.is-right]="bar.side === 'right'"
                [style.width.%]="bar.percent"
                [style.background]="bar.side === 'right' ? positiveColor() : negativeColor()"
              ></span>
            }
          </div>
        </div>
      }
      <div class="scale">
        <span>{{ leftScale() }}</span>
        <span>{{ rightScale() }}</span>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .diverging {
      display: grid;
      gap: 14px;
    }

    .axis {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--md-sys-color-on-surface-variant);
    }

    .axis-center {
      padding: 3px 10px;
      border-radius: 999px;
      background: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
      font-weight: 600;
      white-space: nowrap;
    }

    .axis-side--right {
      text-align: right;
    }

    .row-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 6px;
    }

    .row-label {
      color: var(--md-sys-color-on-surface);
      font-size: 14px;
      font-weight: 500;
    }

    .row-value {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 13px;
      font-variant-numeric: tabular-nums;
    }

    .track {
      position: relative;
      height: 12px;
      border-radius: 6px;
      background: var(--md-sys-color-surface-container-highest);
    }

    .center-line {
      position: absolute;
      left: 50%;
      top: -3px;
      bottom: -3px;
      width: 2px;
      transform: translateX(-1px);
      background: var(--md-sys-color-on-surface);
    }

    .fill {
      position: absolute;
      top: 0;
      height: 100%;
    }

    .fill.is-left {
      right: 50%;
      border-radius: 6px 0 0 6px;
    }

    .fill.is-right {
      left: 50%;
      border-radius: 0 6px 6px 0;
    }

    .scale {
      display: flex;
      justify-content: space-between;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 11px;
      font-variant-numeric: tabular-nums;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DivergingBarChartComponent {
  readonly items = input<readonly DivergingBarItem[]>([]);
  readonly center = input(0);
  readonly centerLabel = input('Center');
  readonly positiveColor = input('var(--chart-series-3)');
  readonly negativeColor = input('var(--chart-series-2)');
  readonly ariaLabel = input('Diverging bar chart');

  protected readonly bars = computed<DivergingBar[]>(() => {
    const center = this.center();
    const items = this.items();
    const maxAbs = items.reduce((max, item) => Math.max(max, Math.abs(item.value - center)), 0);

    return items.map((item) => {
      const delta = item.value - center;
      const magnitude = Math.abs(delta);
      return {
        id: item.id,
        label: item.label,
        display: item.display,
        side: delta > 0 ? 'right' : delta < 0 ? 'left' : 'none',
        percent: maxAbs > 0 ? (magnitude / maxAbs) * 50 : 0,
      };
    });
  });

  /** Actual leftmost delta, so the scale reflects the data rather than symmetry. */
  protected readonly leftScale = computed(() => {
    const center = this.center();
    const deltas = this.items().map((item) => item.value - center);
    const min = deltas.length > 0 ? Math.min(...deltas, 0) : 0;
    return min.toFixed(1);
  });

  /** Actual rightmost delta. */
  protected readonly rightScale = computed(() => {
    const center = this.center();
    const deltas = this.items().map((item) => item.value - center);
    const max = deltas.length > 0 ? Math.max(...deltas, 0) : 0;
    return `+${max.toFixed(1)}`;
  });
}
