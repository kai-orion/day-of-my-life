import { ChangeDetectionStrategy, Component, contentChildren, signal } from '@angular/core';
import { StepComponent } from './step.component';

/**
 * Centered onboarding flow.
 *
 * Renders a segmented progress bar driven by the projected `app-step` children
 * and shows the active step's content below it. The index is owned here so
 * steps stay declarative; navigation happens through `next` / `previous`.
 */
@Component({
  selector: 'app-stepper',
  template: `
    <div
      class="progress"
      role="progressbar"
      aria-label="Setup progress"
      aria-valuemin="1"
      [attr.aria-valuemax]="steps().length"
      [attr.aria-valuenow]="selectedIndex() + 1"
      [attr.aria-valuetext]="'Step ' + (selectedIndex() + 1) + ' of ' + steps().length"
    >
      @for (step of steps(); track step; let i = $index) {
        <span
          class="segment"
          [class.filled]="i <= selectedIndex()"
        ></span>
      }
    </div>

    <div class="stage">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }

    .progress {
      display: flex;
      gap: 8px;
    }

    .segment {
      background: var(--md-sys-color-surface-container-highest);
      border-radius: 999px;
      flex: 1;
      height: 4px;
      transition: background-color 320ms cubic-bezier(0.2, 0, 0, 1);
    }

    .segment.filled {
      background: var(--md-sys-color-primary);
    }

    .stage {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      min-height: 300px;
    }

    @media (prefers-reduced-motion: reduce) {
      .segment {
        transition: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  public readonly steps = contentChildren(StepComponent);
  public readonly selectedIndex = signal(0);

  public next(): void {
    this.selectedIndex.update((index) =>
      index < this.steps().length - 1 ? index + 1 : index,
    );
  }

  public previous(): void {
    this.selectedIndex.update((index) => (index > 0 ? index - 1 : index));
  }

  public select(index: number): void {
    this.selectedIndex.set(index);
  }
}
