import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { FormField, form, max, min, required, validate } from '@angular/forms/signals';
import { COUNTRY_LIFE_EXPECTANCY, findCountry, WORLD_AVERAGE_LIFE_EXPECTANCY } from '../../models/life-expectancy.data';

export interface LifeSettingsValue {
  birthday: string;
  lifespanYears: number;
  countryCode: string;
}

const CustomCountryCode = '';

@Component({
  selector: 'app-life-settings-form',
  imports: [FormField],
  templateUrl: './life-settings-form.component.html',
  styleUrl: './life-settings-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeSettingsFormComponent {
  readonly birthday = input('');
  readonly lifespanYears = input(80);
  readonly countryCode = input('');

  protected readonly countries = COUNTRY_LIFE_EXPECTANCY;
  protected readonly worldAverage = WORLD_AVERAGE_LIFE_EXPECTANCY;
  protected readonly customCountryCode = CustomCountryCode;

  protected readonly model = signal<LifeSettingsValue>({
    birthday: '',
    lifespanYears: 80,
    countryCode: '',
  });

  protected readonly settingsForm = form(this.model, (path) => {
    required(path.birthday, { message: 'Please choose your date of birth.' });
    min(path.lifespanYears, 1, { message: 'Life expectancy must be at least 1 year.' });
    max(path.lifespanYears, 130, { message: 'Life expectancy must be at most 130 years.' });
    validate(path.birthday, ({ value }) => {
      const birthday = value();
      if (birthday !== '' && Date.parse(birthday) > Date.now()) {
        return { kind: 'future', message: 'Your date of birth cannot be in the future.' };
      }
      return undefined;
    });
  });

  public readonly value = this.model.asReadonly();
  public readonly valid = computed(() => this.settingsForm().valid());

  private seeded = false;

  constructor() {
    effect(() => {
      if (this.seeded) {
        return;
      }
      this.seeded = true;
      this.model.set({
        birthday: this.birthday(),
        lifespanYears: this.lifespanYears(),
        countryCode: this.countryCode(),
      });
    });

    // Editing the lifespan by hand detaches it from the selected country average.
    effect(() => {
      const { countryCode, lifespanYears } = this.model();
      const country = countryCode === CustomCountryCode ? undefined : findCountry(countryCode);
      if (country && lifespanYears !== country.lifeExpectancy) {
        this.model.update((current) => ({ ...current, countryCode: CustomCountryCode }));
      }
    });
  }

  protected onCountryChange(countryCode: string): void {
    const country = findCountry(countryCode);
    this.model.update((current) => ({
      ...current,
      countryCode,
      lifespanYears: country ? country.lifeExpectancy : current.lifespanYears,
    }));
  }
}
