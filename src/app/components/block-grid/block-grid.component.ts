import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'component-block-grid',
  standalone: true,
  templateUrl: './block-grid.component.html',
  styleUrl: './block-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockGridComponent {
  readonly counts = input(0);
  readonly filledCounts = input(0);
  /**
   * @unit px
   */
  readonly blockSize = input(48);

  protected readonly blocks = computed(() =>
    Array.from({ length: Math.max(0, this.counts()) }, (_, index) => index < this.filledCounts()),
  );
}
