import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `
    <div
      class="relative h-[48px] w-full overflow-hidden rounded-[28px] bg-[var(--progress-track,var(--md-sys-color-primary-container))]"
      role="progressbar"
      [attr.aria-valuemin]="min()"
      [attr.aria-valuemax]="max()"
      [attr.aria-valuenow]="value()"
    >
      <div
        class="h-full rounded-[28px] bg-[var(--progress-indicator,var(--md-sys-color-primary))] transition-[width] duration-300 ease-emphasized"
        [style.width.%]="percent()"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  readonly min = input(0);
  readonly max = input(100);
  readonly value = input(0);

  protected readonly percent = computed(() => {
    const range = this.max() - this.min();
    if (range <= 0) {
      return 0;
    }
    const ratio = (this.value() - this.min()) / range;
    return Math.min(100, Math.max(0, ratio * 100));
  });
}
