import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { ButtonComponent } from '../../components/button/button.component';
import type { BarChartItem, ChartSegment } from '../../components/charts/chart.data';
import { DaysFieldComponent } from '../../components/days-field/days-field.component';
import {
  DivergingBarChartComponent,
  type DivergingBarItem,
} from '../../components/diverging-bar-chart/diverging-bar-chart.component';
import { DonutChartComponent } from '../../components/donut-chart/donut-chart.component';
import { FabComponent } from '../../components/fab/fab.component';
import { IconComponent } from '../../components/icon/icon.component';
import { LifeChartComponent } from '../../components/life-chart/life-chart.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { SettingsPanelComponent } from '../../components/settings-panel/settings-panel.component';
import { buildLifeReport, type MilestoneCategory } from '../../models/life-report';
import { SeoService } from '../../services/seo.service';
import { MyLifeService } from '../../states/my-life.service';
import { ThemeService } from '../../states/theme.service';

/** Distinct categorical colors per life stage (see the palette in `styles.css`). */
const STAGE_COLORS: Readonly<Record<string, string>> = {
  'pre-memory': 'var(--chart-series-6)',
  school: 'var(--chart-series-3)',
  work: 'var(--chart-series-1)',
  retirement: 'var(--chart-series-2)',
};

const MILESTONE_CATEGORY_LABELS: Readonly<Record<MilestoneCategory, string>> = {
  life: 'Life',
  education: 'Education & work',
  family: 'Family · average',
};

@Component({
  selector: 'page-report',
  imports: [
    DecimalPipe,
    ProgressComponent,
    DaysFieldComponent,
    FabComponent,
    IconComponent,
    LifeChartComponent,
    SettingsPanelComponent,
    ButtonComponent,
    PieChartComponent,
    DonutChartComponent,
    BarChartComponent,
    DivergingBarChartComponent,
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent {
  private readonly myLifeService = inject(MyLifeService);
  private readonly seo = inject(SeoService);
  protected readonly theme = inject(ThemeService);

  constructor() {
    this.seo.apply({
      title: 'Your life report — Day of My Life',
      robots: 'noindex,follow',
    });
  }

  protected readonly settingsOpen = signal(false);

  /**
   * The whole report is derived from the persisted settings. Reading the
   * signals here keeps the computed report reactive while the underlying maths
   * stays pure in `life-report.ts`.
   */
  protected readonly report = computed(() =>
    buildLifeReport({
      birthday: this.myLifeService.birthday(),
      lifespanYears: this.myLifeService.lifespanYears(),
      countryCode: this.myLifeService.countryCode(),
    }),
  );

  /** Lived vs remaining days, for the ring chart in "Life in numbers". */
  protected readonly livedRemainingSegments = computed<ChartSegment[]>(() => {
    const summary = this.report().summary;
    return [
      {
        id: 'lived',
        label: 'Lived',
        value: summary.livedDays,
        color: 'var(--md-sys-color-primary)',
        display: `${summary.livedDays.toLocaleString()} days`,
      },
      {
        id: 'remaining',
        label: 'Remaining',
        value: summary.remainingDays,
        color: 'var(--md-sys-color-outline)',
        display: `${summary.remainingDays.toLocaleString()} days`,
      },
    ];
  });

  /** Share of the felt life held by each stage, for the life-stage pie. */
  protected readonly stageSlices = computed<ChartSegment[]>(() =>
    this.report()
      .stages.filter((stage) => stage.perceivedShare > 0)
      .map((stage) => ({
        id: stage.id,
        label: stage.label,
        value: stage.perceivedShare,
        color: STAGE_COLORS[stage.id] ?? 'var(--md-sys-color-primary)',
      })),
  );

  /** Per-period progress through each memorable school-length unit. */
  protected readonly familiarPeriodBars = computed<BarChartItem[]>(() =>
    this.report().insights.units.map((unit) => ({
      id: unit.id,
      label: unit.label,
      value: unit.livedUnits,
      max: unit.livedUnits + unit.remainingUnits,
      display: `${unit.livedUnits.toFixed(1)} lived · ${unit.remainingUnits.toFixed(1)} left`,
      color: 'var(--md-sys-color-primary)',
    })),
  );

  /** Reference life expectancies, compared against the user's lifespan. */
  protected readonly comparisonItems = computed<DivergingBarItem[]>(() =>
    this.report().comparisons.map((comparison) => ({
      id: comparison.id,
      label: comparison.label,
      value: comparison.referenceYears,
      display: `${comparison.referenceYears.toFixed(1)} yrs`,
    })),
  );

  /** The center line of the lifespan comparison chart: the user's own lifespan. */
  protected readonly userLifespan = computed(() => this.report().summary.lifespanYears);

  protected readonly userLifespanLabel = computed(
    () => `Expected · ${this.userLifespan().toFixed(1)} yrs`,
  );

  /** The center line of the age comparison chart: the user's current age. */
  protected readonly userAge = computed(() => this.report().summary.ageYears);

  protected readonly userAgeLabel = computed(() => `Now · ${this.userAge().toFixed(1)} yrs`);

  protected readonly asPercent = (fraction: number): number => fraction * 100;

  protected categoryLabel(category: MilestoneCategory): string {
    return MILESTONE_CATEGORY_LABELS[category];
  }

  /** Formats a milestone offset relative to today. */
  protected daysAwayLabel(daysAway: number): string {
    if (daysAway >= 0) {
      return `in ${daysAway.toLocaleString()} days`;
    }
    return `${Math.abs(daysAway).toLocaleString()} days ago`;
  }
}
