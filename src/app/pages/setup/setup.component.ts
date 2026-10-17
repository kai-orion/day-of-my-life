import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { FormField, form, max, min } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CardComponent } from '../../components/card/card.component';
import { StepComponent } from '../../components/stepper/step.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { COUNTRY_LIFE_EXPECTANCY, findCountry, WORLD_AVERAGE_LIFE_EXPECTANCY } from '../../models/life-expectancy.data';
import { SeoService } from '../../services/seo.service';
import { MyLifeService } from '../../states/my-life.service';

@Component({
  selector: 'page-setup',
  imports: [StepperComponent, StepComponent, CardComponent, CalendarComponent, ButtonComponent, FormField],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupComponent {
  private readonly myLifeService = inject(MyLifeService);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.apply({
      title: 'Set up your report — Day of My Life',
      robots: 'noindex,follow',
    });
  }

  protected readonly birthday = model('');
  protected readonly countries = COUNTRY_LIFE_EXPECTANCY;
  protected readonly worldAverage = WORLD_AVERAGE_LIFE_EXPECTANCY;

  protected readonly lifespanModel = signal({ lifespanYears: 80, countryCode: '' });
  protected readonly lifespanForm = form(this.lifespanModel, (path) => {
    min(path.lifespanYears, 1, { message: 'Life expectancy must be at least 1 year.' });
    max(path.lifespanYears, 130, { message: 'Life expectancy must be at most 130 years.' });
  });

  protected readonly canFinish = computed(() => this.birthday() !== '' && this.lifespanForm().valid());

  protected onCountryChange(countryCode: string): void {
    const country = findCountry(countryCode);
    this.lifespanModel.update((current) => ({
      ...current,
      countryCode,
      lifespanYears: country ? country.lifeExpectancy : current.lifespanYears,
    }));
  }

  protected done(): void {
    if (!this.canFinish()) {
      return;
    }
    this.myLifeService.update({
      birthday: this.birthday(),
      lifespanYears: this.lifespanModel().lifespanYears,
      countryCode: this.lifespanModel().countryCode,
    });
    this.router.navigateByUrl('report');
  }
}
