import { ChangeDetectionStrategy, Component, inject, output, viewChild } from '@angular/core';
import { MyLifeService } from '../../states/my-life.service';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { LifeSettingsFormComponent } from '../life-settings-form/life-settings-form.component';

@Component({
  selector: 'app-settings-panel',
  imports: [LifeSettingsFormComponent, ButtonComponent, IconComponent],
  templateUrl: './settings-panel.component.html',
  styleUrl: './settings-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closed.emit()',
  },
})
export class SettingsPanelComponent {
  private readonly myLifeService = inject(MyLifeService);
  private readonly settingsForm = viewChild(LifeSettingsFormComponent);

  public readonly closed = output<void>();

  protected readonly birthday = this.myLifeService.birthday;
  protected readonly lifespanYears = this.myLifeService.lifespanYears;
  protected readonly countryCode = this.myLifeService.countryCode;

  protected save(): void {
    const value = this.settingsForm()?.value();
    if (value === undefined) {
      return;
    }
    this.myLifeService.update(value);
    this.closed.emit();
  }

  protected isValid(): boolean {
    return this.settingsForm()?.valid() ?? false;
  }
}
