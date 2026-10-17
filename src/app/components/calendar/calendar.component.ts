import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, ElementRef, computed, effect, input, model, viewChild } from '@angular/core';
import { DatePicker } from '@sandlada/mdc/components/date-picker/index';

/**
 * `mdc-date-picker` is a web component, so Angular needs to be told that the
 * `mdc-date-picker` tag it renders is a trusted, framework-agnostic element.
 */
declare global {
  interface HTMLElementTagNameMap {
    'mdc-date-picker': DatePicker;
  }
}

/** Payload carried by the `date-change` event of `mdc-date-picker`. */
interface DateChangeDetail {
  /** Selected date as UTC-midnight millis, or `null` when nothing is selected. */
  value: number | null;
}

/**
 * Converts an ISO `yyyy-MM-dd` date into the UTC-midnight millis that
 * `mdc-date-picker` uses internally. Returns `null` for an empty or invalid date.
 */
function toUTCMidnight(iso: string): number | null {
  if (iso === '') {
    return null;
  }

  const millis = Date.parse(`${iso}T00:00:00Z`);
  return Number.isNaN(millis) ? null : millis;
}

/**
 * Converts the UTC-midnight millis of `mdc-date-picker` back into an ISO
 * `yyyy-MM-dd` date. Returns `''` when nothing is selected.
 */
function toISO(millis: number | null): string {
  if (millis === null) {
    return '';
  }

  const date = new Date(millis);
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
  const day = `${date.getUTCDate()}`.padStart(2, '0');
  return `${date.getUTCFullYear()}-${month}-${day}`;
}

/** Formats an ISO `yyyy-MM-dd` date as the `MM/DD/YYYY` text shown in the field. */
function toDisplay(iso: string): string {
  const millis = toUTCMidnight(iso);
  if (millis === null) {
    return '';
  }

  const date = new Date(millis);
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
  const day = `${date.getUTCDate()}`.padStart(2, '0');
  return `${month}/${day}/${date.getUTCFullYear()}`;
}

/**
 * Modal date picker built on `@sandlada/mdc`.
 *
 * The `mdc-date-picker` modal variant only renders the calendar dialog; the
 * field that opens it is rendered here. The component keeps the ISO
 * `yyyy-MM-dd` string contract the rest of the app speaks, so no consumer has
 * to know about the custom element or its UTC-millis domain.
 */
@Component({
  selector: 'app-calendar',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="picker">
      <button
        type="button"
        class="field"
        aria-haspopup="dialog"
        [disabled]="disabled()"
        (click)="open()"
      >
        <span class="notch">Date</span>
        <span class="value" [class.placeholder]="!hasSelection()">{{ fieldText() }}</span>
        <span class="trailing">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14zM7 10h5v5H7z"
            />
          </svg>
        </span>
      </button>
      <span class="supporting">MM/DD/YYYY</span>
    </div>

    <mdc-date-picker
      #picker
      variant="modal"
      selection="single"
      display-mode="calendar"
      supporting-text="Select date"
      [min]="minDate()"
      [max]="maxDate()"
      [disabled]="disabled()"
      (date-change)="selectDate($event)"
    />
  `,
  styles: `
    :host {
      display: block;
    }

    .picker {
      display: flex;
      flex-direction: column;
    }

    .field {
      align-items: center;
      background: transparent;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: var(--md-sys-shape-corner-extra-small, 4px);
      box-sizing: border-box;
      color: var(--md-sys-color-on-surface);
      cursor: pointer;
      display: flex;
      font-family: inherit;
      font-size: 16px;
      gap: 8px;
      height: 56px;
      justify-content: space-between;
      min-width: 240px;
      padding-inline: 16px 8px;
      position: relative;
      text-align: start;
      width: 100%;
    }

    .field:disabled {
      cursor: default;
      opacity: 0.38;
    }

    .field:focus-visible {
      outline: 2px solid var(--md-sys-color-primary);
      outline-offset: 2px;
    }

    .notch {
      background: var(--md-sys-color-surface-container-low);
      color: var(--md-sys-color-on-surface-variant);
      font-size: 12px;
      left: 12px;
      line-height: 16px;
      padding-inline: 4px;
      position: absolute;
      top: -8px;
    }

    .value {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .value.placeholder {
      color: var(--md-sys-color-on-surface-variant);
    }

    .trailing {
      align-items: center;
      background: var(--md-sys-color-surface-container-high);
      border-radius: 8px;
      display: inline-flex;
      flex-shrink: 0;
      justify-content: center;
      padding: 8px;
    }

    .trailing svg {
      fill: currentColor;
      height: 24px;
      width: 24px;
    }

    .supporting {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 12px;
      line-height: 16px;
      padding-block-start: 4px;
      padding-inline-start: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  private readonly pickerRef = viewChild<ElementRef<DatePicker>>('picker');

  /** Selected date as an ISO `yyyy-MM-dd` string. */
  readonly selected = model('');

  /** Earliest selectable date as an ISO `yyyy-MM-dd` string, or `''` when unbounded. */
  readonly min = input('');

  /** Latest selectable date as an ISO `yyyy-MM-dd` string, or `''` when unbounded. */
  readonly max = input('');

  /** Whether the field can be opened. */
  readonly disabled = input(false);

  protected readonly value = computed(() => toUTCMidnight(this.selected()));
  protected readonly minDate = computed(() => toUTCMidnight(this.min()));
  protected readonly maxDate = computed(() => toUTCMidnight(this.max()));
  protected readonly hasSelection = computed(() => this.selected() !== '');
  protected readonly fieldText = computed(() => toDisplay(this.selected()) || 'Select date');

  constructor() {
    // `mdc-date-picker` keeps the date it renders in state of its own and only
    // falls back to `value` while it is initializing, so a date that comes from
    // outside `[(selected)]` has to be pushed in as form state to reach both
    // the field text and the highlighted day.
    effect(() => {
      const value = this.value();
      const picker = this.pickerRef()?.nativeElement;

      if (!picker || picker.value === value) {
        return;
      }

      picker.formStateRestoreCallback(this.selected());
    });
  }

  /** Opens the modal calendar dialog anchored to the field. */
  protected open(): void {
    void this.pickerRef()?.nativeElement.show();
  }

  protected selectDate(event: Event): void {
    const detail = (event as CustomEvent<DateChangeDetail>).detail;
    this.selected.set(toISO(detail.value));
  }
}
