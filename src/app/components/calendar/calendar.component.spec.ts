import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DatePicker } from '@sandlada/mdc/components/date-picker/index';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CalendarComponent } from './calendar.component';

/**
 * Angular 22 flushes change detection from signal writes, so the host keeps its
 * selection in a signal to mirror how the app drives the component. The
 * two-way binding is spelled out because a template parser cannot assign to a
 * function call inside the banana syntax.
 */
@Component({
  imports: [CalendarComponent],
  template: `<app-calendar [selected]="selected()" (selectedChange)="selected.set($event)" />`,
})
class HostComponent {
  readonly selected = signal('1990-05-20');
}

function queryPicker(host: HTMLElement): DatePicker {
  const picker = host.querySelector('mdc-date-picker');
  if (!(picker instanceof DatePicker)) {
    throw new Error('Expected an upgraded mdc-date-picker element.');
  }
  return picker;
}

/** Reads the trigger field's rendered text, i.e. what the user actually sees. */
function fieldText(host: HTMLElement): string {
  return host.querySelector('.field .value')?.textContent?.trim() ?? '';
}

describe('CalendarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent] });
  });

  it('renders the mdc-date-picker web component with the modal variant', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);
    await picker.updateComplete;

    expect(picker.variant).toBe('modal');
    expect(picker.selection).toBe('single');
  });

  it('renders the selection it was given as UTC-midnight millis', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);
    await picker.updateComplete;

    expect(picker.value).toBe(Date.parse('1990-05-20T00:00:00Z'));
    expect(fieldText(fixture.nativeElement)).toBe('05/20/1990');
  });

  it('reflects an empty selection as a null element value and a placeholder', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.selected.set('');
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);
    await picker.updateComplete;

    expect(picker.value).toBeNull();
    expect(fieldText(fixture.nativeElement)).toBe('Select date');
    expect(fixture.nativeElement.querySelector('.field .value')?.classList.contains('placeholder')).toBe(true);
  });

  it('opens the modal dialog when the field is clicked', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);
    const show = vi.spyOn(picker, 'show').mockResolvedValue(undefined);

    (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.field')?.click();

    expect(show).toHaveBeenCalledOnce();
  });

  it('writes the date-change event back into the selected model', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    queryPicker(fixture.nativeElement).dispatchEvent(
      new CustomEvent('date-change', { detail: { value: Date.parse('2001-12-31T00:00:00Z') } }),
    );
    fixture.detectChanges();

    expect(fixture.componentInstance.selected()).toBe('2001-12-31');
  });

  it('clears the selection when the element reports no value', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    queryPicker(fixture.nativeElement).dispatchEvent(new CustomEvent('date-change', { detail: { value: null } }));
    fixture.detectChanges();

    expect(fixture.componentInstance.selected()).toBe('');
  });

  it('follows a selection that changes after mount', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);
    await picker.updateComplete;

    fixture.componentInstance.selected.set('2001-12-31');
    fixture.detectChanges();
    await picker.updateComplete;

    expect(picker.value).toBe(Date.parse('2001-12-31T00:00:00Z'));
    expect(fieldText(fixture.nativeElement)).toBe('12/31/2001');
  });

  it('forwards min and max bounds to the element', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.componentRef.setInput('min', '1900-01-01');
    fixture.componentRef.setInput('max', '2100-12-31');
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);

    expect(picker.min).toBe(Date.parse('1900-01-01T00:00:00Z'));
    expect(picker.max).toBe(Date.parse('2100-12-31T00:00:00Z'));
  });

  it('leaves the element unbounded when no bounds are given', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.detectChanges();

    const picker = queryPicker(fixture.nativeElement);

    expect(picker.min).toBeNull();
    expect(picker.max).toBeNull();
  });

  it('disables the field when the component is disabled', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const field = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.field');
    expect(field?.disabled).toBe(true);
  });
});
