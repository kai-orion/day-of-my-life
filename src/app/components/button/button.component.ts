import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';

@Component({
  selector: 'app-button',
  host: {
    '[class.is-disabled]': 'disabled()',
  },
  template: `
    <button
      class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-full px-[24px] label-large transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40"
      [class]="variantClasses()"
      [type]="type()"
      [disabled]="disabled()"
    >
      <ng-content />
    </button>
  `,
  styles: `
    /* The inner button goes pointer-events-none when disabled, so without this
       the click falls through to the <app-button> host and any (click) binding
       on it still fires. Make the whole host inert while disabled. */
    :host(.is-disabled) {
      pointer-events: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('filled');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);

  protected readonly variantClasses = computed(() => {
    switch (this.variant()) {
      case 'tonal':
        return 'bg-secondary-container text-on-secondary-container hover:bg-secondary-dim';
      case 'outlined':
        return 'border border-outline bg-transparent text-primary hover:bg-primary/8';
      case 'text':
        return 'bg-transparent text-primary hover:bg-primary/8';
      case 'elevated':
        return 'bg-surface-container-low text-primary shadow-md hover:bg-surface-container';
      case 'filled':
      default:
        return 'bg-primary text-on-primary hover:bg-primary-dim';
    }
  });
}
