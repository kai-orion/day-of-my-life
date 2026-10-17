import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { chartColor, round, type BarChartItem } from '../charts/chart.data';

interface Bar {
  readonly id: string;
  readonly label: string;
  readonly display?: string;
  readonly caption?: string;
  readonly color: string;
  readonly percent: number;
}

/**
 * A set of horizontal bars. Each bar is scaled to the largest value in the set
 * unless it declares its own `max`, which is useful for per-item progress.
 */
@Component({
  selector: 'app-bar-chart',
  template: `
    <div
      class="bars"
      role="img"
      [attr.aria-label]="ariaLabel()"
    >
      @for (bar of bars(); track bar.id) {
        <div class="bar-row">
          <div class="bar-head">
            <span class="bar-label">{{ bar.label }}</span>
            @if (bar.display) {
              <span class="bar-value">{{ bar.display }}</span>
            }
          </div>
          @if (bar.caption) {
            <span class="bar-caption">{{ bar.caption }}</span>
          }
          <div class="bar-track">
            <span
              class="bar-fill"
              [style.width.%]="bar.percent"
              [style.background]="bar.color"
            ></span>
          </div>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .bars {
      display: grid;
      gap: 16px;
    }

    .bar-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 6px;
    }

    .bar-label {
      color: var(--md-sys-color-on-surface);
      font-size: 14px;
      font-weight: 500;
    }

    .bar-value {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 13px;
      font-variant-numeric: tabular-nums;
    }

    .bar-caption {
      display: block;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 12px;
    }

    .bar-track {
      height: 10px;
      border-radius: 999px;
      background: var(--md-sys-color-surface-container-highest);
      overflow: hidden;
    }

    .bar-fill {
      display: block;
      height: 100%;
      border-radius: 999px;
      transition: width 300ms ease;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent {
  readonly items = input<readonly BarChartItem[]>([]);
  readonly ariaLabel = input('Bar chart');

  protected readonly bars = computed<Bar[]>(() => {
    const items = this.items();
    const globalMax = items.reduce((max, item) => Math.max(max, item.max ?? item.value), 0);

    return items.map((item, index) => {
      const scale = item.max ?? globalMax;
      const percent = scale > 0 ? Math.min(100, Math.max(0, (item.value / scale) * 100)) : 0;
      return {
        id: item.id,
        label: item.label,
        display: item.display,
        caption: item.caption,
        color: chartColor(item, index),
        percent: round(percent, 2),
      };
    });
  });
}
