import { computed, Injectable, signal } from '@angular/core';
import { findCountry } from '../models/life-expectancy.data';

export interface LifeSettings {
  /** Birthday as an ISO `yyyy-MM-dd` string. */
  readonly birthday: string;
  /** Expected lifespan in years. */
  readonly lifespanYears: number;
  /** Country code the lifespan was based on, or `''` for a custom value. */
  readonly countryCode: string;
}

const StorageName = '_my-life_';
const DefaultLifespanYears = 80;
const MillisecondsPerDay = 1000 * 60 * 60 * 24;

interface LegacyLifeSettings {
  birthday?: string;
  deathday?: string;
}

function readSettings(): LifeSettings {
  const raw = localStorage.getItem(StorageName);
  if (raw === null) {
    return { birthday: '', lifespanYears: DefaultLifespanYears, countryCode: '' };
  }

  try {
    const parsed = JSON.parse(raw) as Partial<LifeSettings> & LegacyLifeSettings;
    const birthday = parsed.birthday ?? '';

    if (typeof parsed.lifespanYears === 'number') {
      return {
        birthday,
        lifespanYears: parsed.lifespanYears,
        countryCode: parsed.countryCode ?? '',
      };
    }

    // Migrate the legacy `{ birthday, deathday }` shape into a lifespan.
    let lifespanYears = DefaultLifespanYears;
    if (birthday !== '' && parsed.deathday) {
      const days = Math.abs(Date.parse(parsed.deathday) - Date.parse(birthday)) / MillisecondsPerDay;
      lifespanYears = Math.max(1, Math.round(days / 365.25));
    }
    return { birthday, lifespanYears, countryCode: '' };
  } catch {
    return { birthday: '', lifespanYears: DefaultLifespanYears, countryCode: '' };
  }
}

@Injectable({
  providedIn: 'root',
})
export class MyLifeService {
  private readonly settings = signal<LifeSettings>(readSettings());

  public readonly birthday = computed(() => this.settings().birthday);
  public readonly lifespanYears = computed(() => this.settings().lifespanYears);
  public readonly countryCode = computed(() => this.settings().countryCode);
  public readonly isConfigured = computed(() => this.settings().birthday !== '');

  public readonly ageYears = computed(() => this.getDaysBetween(Date.parse(this.birthday()), Date.now()) / 365.25);

  public readonly deathday = computed(() => addYears(this.birthday(), this.lifespanYears()));

  public readonly survivalDays = computed(() =>
    Math.max(0, this.getDaysBetween(Date.parse(this.birthday()), Date.now())),
  );

  public readonly lifetimeDays = computed(
    () => this.getDaysBetween(Date.parse(this.birthday()), Date.parse(this.deathday())) + 1,
  );

  public readonly remainingDays = computed(() => Math.max(0, this.lifetimeDays() - this.survivalDays()));

  public updateBirthday(dateString: string): void {
    this.update({ birthday: dateString });
  }

  public updateLifespan(lifespanYears: number): void {
    this.update({ lifespanYears });
  }

  public updateCountry(countryCode: string): void {
    const country = findCountry(countryCode);
    this.update({
      countryCode: country?.code ?? '',
      lifespanYears: country?.lifeExpectancy ?? this.lifespanYears(),
    });
  }

  public update(settings: Partial<LifeSettings>): void {
    this.settings.update((current) => ({ ...current, ...settings }));
    localStorage.setItem(StorageName, JSON.stringify(this.settings()));
  }

  private getDaysBetween(from: number, to: number): number {
    if (Number.isNaN(from) || Number.isNaN(to)) {
      return 0;
    }
    return Math.round(Math.abs((from - to) / MillisecondsPerDay));
  }
}

function addYears(dateString: string, years: number): string {
  const date = new Date(Date.parse(dateString));
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  date.setFullYear(date.getFullYear() + years);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}
