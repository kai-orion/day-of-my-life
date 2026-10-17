import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { StepperComponent } from './stepper.component';

/**
 * One step of an `app-stepper` flow. Only the active step renders its content,
 * so each step can own a short entrance transition without extra bookkeeping.
 */
@Component({
  selector: 'app-step',
  template: `
    @if (isActive()) {
      <div
        class="step"
        role="group"
        [attr.aria-label]="label()"
      >
        <ng-content />
      </div>
    }
  `,
  styles: `
    /* Let the active step-body participate directly in the stepper's flex
       layout, so it stretches to the stage height and the actions can anchor
       to the bottom. Inactive steps render nothing. */
    :host {
      display: contents;
    }

    .step {
      animation: step-enter 280ms cubic-bezier(0.2, 0, 0, 1) both;
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    @keyframes step-enter {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .step {
        animation: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  protected readonly stepper = inject(StepperComponent);
  readonly label = input.required<string>();

  protected readonly index = computed(() => this.stepper.steps().indexOf(this));
  protected readonly isActive = computed(
    () => this.index() === this.stepper.selectedIndex(),
  );
}
