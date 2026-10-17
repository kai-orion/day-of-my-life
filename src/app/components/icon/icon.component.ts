import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span
      class="material-symbols-outlined select-none leading-none"
      [style.font-size.px]="size()"
      aria-hidden="true"
      ><ng-content
    /></span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly size = input(24);
}
