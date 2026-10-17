/**
 * Life report aggregation
 * =======================
 *
 * The subjective-time maths lives in `life-model.ts`. This module wraps it in a
 * single, presentation-ready "report": chronological vs perceived progress,
 * the time that is left expressed in several human units, a life-stage
 * breakdown, upcoming milestones and comparisons against reference life
 * expectancies.
 *
 * Everything here is computed from the raw configuration (`birthday`,
 * `lifespanYears`, `countryCode`) plus a clock, so the report is pure and easy
 * to reason about. Read the `life-model.ts` header before touching the
 * perception maths — this file only aggregates its results.
 */
import {
  computeLifeInsights,
  cumulativeAt,
  DEFAULT_LIFE_MODEL,
  DEFAULT_PERCEIVED_TIME_SCALE,
  type LifeInsights,
  type LifeStage,
  type PerceivedTimeScale,
  type SubjectiveTimeModel,
} from './life-model';
import {
  COUNTRY_LIFE_EXPECTANCY,
  findCountry,
  WORLD_AVERAGE_LIFE_EXPECTANCY,
  type CountryLifeExpectancy,
} from './life-expectancy.data';
import { findLifeCourse, type CountryLifeCourse } from './life-course.data';

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const DAYS_PER_YEAR = 365.25;
const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = DAYS_PER_YEAR / 12;
const DAYS_PER_SEASON = DAYS_PER_YEAR / 4;
const DAYS_PER_LUNAR_MONTH = 29.530588;
const HOURS_PER_DAY = 24;

/** One "in numbers" row: the same unit measured for the lived and remaining life. */
export interface LifeCount {
  readonly id: string;
  /** Human label, e.g. `Days`. */
  readonly label: string;
  /** Unit name in singular/plural form used in prose, e.g. `days`. */
  readonly unit: string;
  /** `DecimalPipe` digits info used to render the numeric value. */
  readonly digits: string;
  readonly lived: number;
  readonly remaining: number;
}

export interface LifeReportSummary {
  readonly birthday: string;
  readonly expectedEndDate: string;
  readonly ageYears: number;
  readonly perceivedAgeYears: number;
  readonly lifespanYears: number;
  readonly livedDays: number;
  readonly remainingDays: number;
  readonly totalDays: number;
  readonly country: CountryLifeExpectancy | null;
  readonly worldLifeExpectancy: number;
}

export interface LifeReportProgress {
  /** Share of the chronological lifespan already lived, 0..1. */
  readonly chronologicalFraction: number;
  /** Share of the *perceived* lifespan already lived, 0..1. */
  readonly perceivedFraction: number;
  readonly chronologicalRemainingFraction: number;
  readonly perceivedRemainingFraction: number;
  /** Chronological age at the exact middle of the lifespan. */
  readonly chronologicalMidpointAge: number;
  /** Chronological age at which *perceived* life reaches halfway. */
  readonly perceivedMidpointAge: number;
  /** `chronologicalMidpointAge - perceivedMidpointAge`; positive means you feel ahead. */
  readonly perceivedLeadYears: number;
}

export interface LifeReportStage {
  readonly id: string;
  readonly label: string;
  readonly startAge: number;
  readonly endAge: number;
  readonly durationYears: number;
  /** Subjective intensity multiplier applied to the logarithmic density. */
  readonly weight: number;
  /** Share of the total perceived lifespan captured by this stage, 0..1. */
  readonly perceivedShare: number;
  /** How far the stage has been traversed, 0..1. */
  readonly elapsedFraction: number;
  readonly status: 'past' | 'current' | 'upcoming';
  readonly livedYears: number;
  readonly remainingYears: number;
}

export type MilestoneCategory = 'life' | 'education' | 'family';

export interface LifeMilestone {
  readonly id: string;
  readonly label: string;
  readonly note: string;
  readonly age: number;
  /** ISO `yyyy-MM-dd`, or `''` when the birthday is not usable. */
  readonly date: string;
  /** Days from "now"; negative once the date has passed. */
  readonly daysAway: number;
  readonly status: 'past' | 'upcoming';
  readonly category: MilestoneCategory;
}

export interface LifeComparison {
  readonly id: string;
  readonly label: string;
  readonly referenceYears: number;
  /** `lifespanYears - referenceYears`. */
  readonly deltaYears: number;
  readonly status: 'above' | 'below' | 'equal';
}

export interface LifeReportMethodology {
  readonly offset: number;
  readonly scaleMaxAge: number;
  readonly step: number;
  readonly stages: readonly LifeStage[];
  readonly dataSources: readonly string[];
  readonly disclaimer: string;
}

export interface LifeReportInput {
  /** Birthday as an ISO `yyyy-MM-dd` string. */
  readonly birthday: string;
  /** Expected lifespan in years. */
  readonly lifespanYears: number;
  /** Country code the lifespan was based on, or `''` for a custom value. */
  readonly countryCode: string;
  /** Clock override; defaults to the current time. */
  readonly now?: Date;
}

export interface LifeReport {
  readonly generatedAt: string;
  readonly summary: LifeReportSummary;
  readonly progress: LifeReportProgress;
  readonly counts: readonly LifeCount[];
  readonly stages: readonly LifeReportStage[];
  /** All milestones on one chronological timeline, sorted by age. */
  readonly milestones: readonly LifeMilestone[];
  readonly comparisons: readonly LifeComparison[];
  /** Share of the tracked countries whose expectancy is at or below the lifespan, 0..1. */
  readonly percentileRank: number;
  readonly insights: LifeInsights;
  readonly methodology: LifeReportMethodology;
}

function parseISODate(iso: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime();
  }
  return Date.parse(iso);
}

function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Birthday `iso` shifted by `years`; fractional ages fall back to 365.25-day years. */
function addYearsToISO(iso: string, years: number): string {
  const time = parseISODate(iso);
  if (Number.isNaN(time)) {
    return '';
  }
  if (Number.isInteger(years)) {
    const date = new Date(time);
    date.setFullYear(date.getFullYear() + years);
    return toISODate(date);
  }
  return toISODate(new Date(time + years * DAYS_PER_YEAR * MS_PER_DAY));
}

function count(
  id: string,
  label: string,
  unit: string,
  digits: string,
  lived: number,
  remaining: number,
): LifeCount {
  return { id, label, unit, digits, lived, remaining };
}

type MilestoneCandidate = Omit<LifeMilestone, 'date' | 'daysAway' | 'status'>;

interface LifeStageMilestoneOptions {
  readonly birthday: string;
  readonly age: number;
  readonly nowTime: number;
  readonly lifespan: number;
  readonly insights: LifeInsights;
  readonly course: CountryLifeCourse;
}

/**
 * Builds all dated milestones on a single chronological timeline.
 *
 * Education, retirement and family nodes follow the selected country's
 * life-course profile, so the timeline reflects that country's school system,
 * pension age and mean age at first childbirth. Family nodes describe the
 * *average* child of that country — a population scenario, not a claim about
 * the reader. Nodes are de-duplicated per category and sorted by age.
 */
function buildMilestones(options: LifeStageMilestoneOptions): LifeMilestone[] {
  const { birthday, age, nowTime, lifespan, insights, course } = options;

  const nextBirthday = Math.floor(age) + 1;
  const nextDecade = (Math.floor(age / 10) + 1) * 10;

  const candidatesByCategory: readonly MilestoneCandidate[][] = [
    [
      { id: 'next-birthday', label: `Birthday ${nextBirthday}`, note: 'The next full year of life', age: nextBirthday, category: 'life' },
      { id: 'next-decade', label: `Age ${nextDecade}`, note: 'The next decade marker', age: nextDecade, category: 'life' },
      { id: 'chronological-midpoint', label: 'Chronological midpoint', note: 'Half of the expected lifespan', age: lifespan / 2, category: 'life' },
      { id: 'perceived-midpoint', label: 'Perceived midpoint', note: 'Your felt life reaches halfway here', age: insights.midpointAge, category: 'life' },
      { id: 'expected-end', label: 'Expected end', note: 'The end of the expected lifespan', age: lifespan, category: 'life' },
    ],
    [
      { id: 'school-entry', label: `School entry · ${course.schoolStartAge}`, note: 'Start of formal education', age: course.schoolStartAge, category: 'education' },
      { id: 'primary-end', label: `Primary ends · ${course.primaryEndAge}`, note: 'End of primary education', age: course.primaryEndAge, category: 'education' },
      { id: 'secondary-end', label: `High school ends · ${course.secondaryEndAge}`, note: 'End of upper-secondary education', age: course.secondaryEndAge, category: 'education' },
      { id: 'tertiary-end', label: `University ends · ${course.tertiaryEndAge}`, note: 'Typical end of tertiary education', age: course.tertiaryEndAge, category: 'education' },
      { id: 'retirement', label: `Retirement · ${course.retirementAge}`, note: 'Country retirement age', age: course.retirementAge, category: 'education' },
    ],
    [
      { id: 'first-child', label: `First child · ${course.firstChildAge}`, note: 'Country mean age at first childbirth', age: course.firstChildAge, category: 'family' },
      { id: 'child-school-entry', label: 'Child · School entry', note: 'Your child starts school', age: course.firstChildAge + course.schoolStartAge, category: 'family' },
      { id: 'child-secondary-end', label: 'Child · High school ends', note: 'Your child finishes secondary education', age: course.firstChildAge + course.secondaryEndAge, category: 'family' },
      { id: 'child-career', label: 'Child · Career begins', note: 'Your child finishes education and starts work', age: course.firstChildAge + course.tertiaryEndAge, category: 'family' },
    ],
  ];

  const epsilon = 0.001;
  const milestones: LifeMilestone[] = [];

  for (const candidates of candidatesByCategory) {
    const seen = new Set<string>();
    for (const candidate of candidates) {
      if (candidate.age < 0 || candidate.age > lifespan + epsilon) {
        continue;
      }
      const key = candidate.age.toFixed(3);
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);

      const date = addYearsToISO(birthday, candidate.age);
      const dateTime = date ? parseISODate(date) : NaN;
      const daysAway = Number.isNaN(dateTime) ? 0 : Math.round((dateTime - nowTime) / MS_PER_DAY);
      milestones.push({
        ...candidate,
        date,
        daysAway,
        status: daysAway >= 0 ? 'upcoming' : 'past',
      });
    }
  }

  return milestones.sort((a, b) => a.age - b.age);
}

function buildStages(
  age: number,
  lifespan: number,
  scale: PerceivedTimeScale,
  model: SubjectiveTimeModel,
): LifeReportStage[] {
  const totalPerceived = cumulativeAt(lifespan, scale);
  return model.stages.map((stage) => {
    const start = Math.min(stage.startAge, lifespan);
    const end = Math.min(stage.endAge, lifespan);
    const durationYears = Math.max(0, end - start);
    const perceived = cumulativeAt(end, scale) - cumulativeAt(start, scale);
    const livedYears = Math.min(Math.max(age - start, 0), durationYears);
    const status: LifeReportStage['status'] =
      age < start ? 'upcoming' : age >= end ? 'past' : 'current';

    return {
      id: stage.id,
      label: stage.label,
      startAge: start,
      endAge: end,
      durationYears,
      weight: stage.weight,
      perceivedShare: totalPerceived > 0 ? perceived / totalPerceived : 0,
      elapsedFraction: durationYears > 0 ? livedYears / durationYears : 0,
      status,
      livedYears,
      remainingYears: Math.max(0, durationYears - livedYears),
    };
  });
}

function buildComparisons(
  lifespan: number,
  country: CountryLifeExpectancy | null,
): LifeComparison[] {
  const highest = COUNTRY_LIFE_EXPECTANCY[0] ?? null;
  const lowest = COUNTRY_LIFE_EXPECTANCY[COUNTRY_LIFE_EXPECTANCY.length - 1] ?? null;

  const reference = (
    id: string,
    label: string,
    referenceYears: number,
  ): LifeComparison => {
    const deltaYears = lifespan - referenceYears;
    return {
      id,
      label,
      referenceYears,
      deltaYears,
      status: deltaYears > 0 ? 'above' : deltaYears < 0 ? 'below' : 'equal',
    };
  };

  const comparisons: LifeComparison[] = [];
  if (country) {
    comparisons.push(reference('country', country.name, country.lifeExpectancy));
  }
  comparisons.push(reference('world', 'World average', WORLD_AVERAGE_LIFE_EXPECTANCY));
  if (highest) {
    comparisons.push(reference('highest', `Highest tracked · ${highest.name}`, highest.lifeExpectancy));
  }
  if (lowest) {
    comparisons.push(reference('lowest', `Lowest tracked · ${lowest.name}`, lowest.lifeExpectancy));
  }
  return comparisons;
}

/**
 * Builds the full life report for a configuration.
 *
 * @param input birthday, expected lifespan, country and an optional clock.
 * @param scale pre-computed perceived-time scale; defaults to the shared one.
 * @param model subjective-time model; defaults to {@link DEFAULT_LIFE_MODEL}.
 */
export function buildLifeReport(
  input: LifeReportInput,
  scale: PerceivedTimeScale = DEFAULT_PERCEIVED_TIME_SCALE,
  model: SubjectiveTimeModel = DEFAULT_LIFE_MODEL,
): LifeReport {
  const now = input.now ?? new Date();
  const nowTime = now.getTime();
  const birthdayTime = parseISODate(input.birthday);
  const valid = !Number.isNaN(birthdayTime);
  const lifespan = Math.max(1, input.lifespanYears);

  const ageYears = valid ? Math.abs(nowTime - birthdayTime) / MS_PER_DAY / DAYS_PER_YEAR : 0;
  const livedDays = valid ? Math.max(0, Math.round((nowTime - birthdayTime) / MS_PER_DAY)) : 0;
  const endDate = valid ? addYearsToISO(input.birthday, lifespan) : '';
  const endTime = endDate ? parseISODate(endDate) : NaN;
  const totalDays =
    valid && !Number.isNaN(endTime)
      ? Math.round(Math.abs(endTime - birthdayTime) / MS_PER_DAY) + 1
      : 0;
  const remainingDays = Math.max(0, totalDays - livedDays);

  const country = findCountry(input.countryCode) ?? null;
  const course = findLifeCourse(input.countryCode);
  const insights = computeLifeInsights(ageYears, lifespan, scale);

  const chronologicalFraction = lifespan > 0 ? Math.min(1, ageYears / lifespan) : 0;
  const chronologicalMidpointAge = lifespan / 2;
  const perceivedMidpointAge = insights.midpointAge;

  const summary: LifeReportSummary = {
    birthday: valid ? toISODate(new Date(birthdayTime)) : '',
    expectedEndDate: endDate,
    ageYears,
    perceivedAgeYears: insights.perceivedAge,
    lifespanYears: lifespan,
    livedDays,
    remainingDays,
    totalDays,
    country,
    worldLifeExpectancy: WORLD_AVERAGE_LIFE_EXPECTANCY,
  };

  const progress: LifeReportProgress = {
    chronologicalFraction,
    perceivedFraction: insights.perceivedProgress,
    chronologicalRemainingFraction: 1 - chronologicalFraction,
    perceivedRemainingFraction: 1 - insights.perceivedProgress,
    chronologicalMidpointAge,
    perceivedMidpointAge,
    perceivedLeadYears: chronologicalMidpointAge - perceivedMidpointAge,
  };

  const counts: LifeCount[] = [
    count('days', 'Days', 'days', '1.0-0', livedDays, remainingDays),
    count('weeks', 'Weeks', 'weeks', '1.0-0', livedDays / DAYS_PER_WEEK, remainingDays / DAYS_PER_WEEK),
    count(
      'months',
      'Months',
      'months',
      '1.0-0',
      livedDays / DAYS_PER_MONTH,
      remainingDays / DAYS_PER_MONTH,
    ),
    count('years', 'Years', 'years', '1.1-1', livedDays / DAYS_PER_YEAR, remainingDays / DAYS_PER_YEAR),
    count(
      'summers',
      'Summers',
      'summers',
      '1.0-0',
      livedDays / DAYS_PER_SEASON,
      remainingDays / DAYS_PER_SEASON,
    ),
    count(
      'weekends',
      'Weekends',
      'weekends',
      '1.0-0',
      (livedDays / DAYS_PER_WEEK) * 2,
      (remainingDays / DAYS_PER_WEEK) * 2,
    ),
    count(
      'full-moons',
      'Full moons',
      'full moons',
      '1.0-0',
      livedDays / DAYS_PER_LUNAR_MONTH,
      remainingDays / DAYS_PER_LUNAR_MONTH,
    ),
    count(
      'hours',
      'Hours',
      'hours',
      '1.0-0',
      livedDays * HOURS_PER_DAY,
      remainingDays * HOURS_PER_DAY,
    ),
  ];

  const countriesAtOrBelow = COUNTRY_LIFE_EXPECTANCY.filter(
    (entry) => entry.lifeExpectancy <= lifespan,
  ).length;

  return {
    generatedAt: toISODate(now),
    summary,
    progress,
    counts,
    stages: buildStages(ageYears, lifespan, scale, model),
    milestones: buildMilestones({
      birthday: input.birthday,
      age: ageYears,
      nowTime,
      lifespan,
      insights,
      course,
    }),
    comparisons: buildComparisons(lifespan, country),
    percentileRank: COUNTRY_LIFE_EXPECTANCY.length > 0 ? countriesAtOrBelow / COUNTRY_LIFE_EXPECTANCY.length : 0,
    insights,
    methodology: {
      offset: model.offset,
      scaleMaxAge: scale.maxAge,
      step: scale.step,
      stages: model.stages,
      dataSources: [
        'Perceived-time model: logarithmic age density (Paul Janet, Weber–Fechner) with life-stage weighting.',
        'Life expectancy: WHO / UN World Population Prospects estimates, both sexes combined (rounded).',
        'Life-course ages (education, retirement, first childbirth): OECD / UNESCO education indicators, national pension ages and UN World Population Prospects fertility data, rounded and approximate.',
      ],
      disclaimer:
        'This report is a reflective estimate, not a medical or actuarial prediction. Life expectancy and life-course figures are population averages and do not account for personal health, lifestyle, nationality or choices; family milestones describe the average child of the selected country, not a prediction about you.',
    },
  };
}
