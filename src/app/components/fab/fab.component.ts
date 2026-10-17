import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type FabVariant = 'primary' | 'secondary' | 'surface';

@Component({
  selector: 'app-fab',
  template: `
    <button
      class="inline-flex h-[56px] w-[56px] items-center justify-center rounded-[16px] shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      [class]="variantClasses()"
      type="button"
    >
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabComponent {
  readonly variant = input<FabVariant>('primary');

  protected readonly variantClasses = computed(() => {
    switch (this.variant()) {
      case 'secondary':
        return 'bg-secondary-container text-on-secondary-container hover:brightness-95';
      case 'surface':
        return 'bg-surface-container-high text-primary hover:brightness-95';
      case 'primary':
      default:
        return 'bg-primary-container text-on-primary-container hover:brightness-95';
    }
  });
}
