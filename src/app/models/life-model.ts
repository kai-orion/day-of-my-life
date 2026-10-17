/**
 * Subjective time model
 * =====================
 *
 * Chronological time and *experienced* time are not the same thing. As we age,
 * a year feels shorter: the first years of life are packed with novelty, while
 * the same twelve months at 50 are a much smaller fraction of everything we
 * have already lived through.
 *
 * The model combines two ideas:
 *
 * 1. **Proportional / logarithmic perception** (Paul Janet, Weber–Fechner).
 *    The perceived "density" of a moment is inversely proportional to the age
 *    at which it is experienced: `density(a) = 1 / (a + offset)`. Integrating
 *    this gives the logarithmic, concave curve described by most people.
 *
 * 2. **Life-stage weighting.** Different phases of life do not carry the same
 *    weight. Before memory forms (roughly the first three years) almost nothing
 *    is retained; childhood and school years pass slowly and feel the longest;
 *    working life accelerates; retirement is the fastest of all. Each stage
 *    multiplies the logarithmic density by a tunable weight.
 *
 * The result is a cumulative "perceived time" curve `S(a)` that rises quickly
 * during childhood and flattens later in life.
 */

export interface LifeStage {
  readonly id: string;
  readonly label: string;
  readonly startAge: number;
  readonly endAge: number;
  /** Multiplier applied to the logarithmic perceived-time density. */
  readonly weight: number;
}

export interface SubjectiveTimeModel {
  /**
   * Offset of the logarithmic density. A larger offset makes the curve more
   * linear; a smaller offset makes the acceleration stronger.
   */
  readonly offset: number;
  readonly stages: readonly LifeStage[];
}

export const DEFAULT_LIFE_MODEL: SubjectiveTimeModel = {
  offset: 12,
  stages: [
    { id: 'pre-memory', label: 'Before memory', startAge: 0, endAge: 3, weight: 0 },
    { id: 'school', label: 'Childhood & school', startAge: 3, endAge: 18, weight: 1.5 },
    { id: 'work', label: 'Working life', startAge: 18, endAge: 65, weight: 1 },
    { id: 'retirement', label: 'Retirement', startAge: 65, endAge: 130, weight: 0.75 },
  ],
};

export interface SchoolStage {
  readonly id: string;
  readonly label: string;
  readonly startAge: number;
  readonly endAge: number;
}

/** Familiar school periods used to express subjective time in plain language. */
export const SCHOOL_STAGES: readonly SchoolStage[] = [
  { id: 'primary', label: 'primary school', startAge: 6, endAge: 12 },
  { id: 'junior', label: 'junior high', startAge: 12, endAge: 15 },
  { id: 'senior', label: 'senior high', startAge: 15, endAge: 18 },
  { id: 'university', label: 'university', startAge: 18, endAge: 22 },
];

export interface PerceivedTimeScale {
  readonly model: SubjectiveTimeModel;
  readonly maxAge: number;
  readonly step: number;
  /** `cumulative[i]` is the perceived time at age `i * step`. */
  readonly cumulative: readonly number[];
  /** Perceived time at {@link maxAge}. */
  readonly total: number;
}

export function stageWeightAt(age: number, model: SubjectiveTimeModel): number {
  const stage = model.stages.find((candidate) => age >= candidate.startAge && age < candidate.endAge);
  return stage?.weight ?? model.stages[model.stages.length - 1]?.weight ?? 0;
}

/** Perceived-time density at a given chronological age. */
export function densityAt(age: number, model: SubjectiveTimeModel): number {
  return stageWeightAt(age, model) / (age + model.offset);
}

/**
 * Pre-computes the cumulative perceived time from birth to `maxAge`.
 * Integrates {@link densityAt} with a small fixed step (trapezoidal rule).
 */
export function createPerceivedTimeScale(
  model: SubjectiveTimeModel = DEFAULT_LIFE_MODEL,
  maxAge = 130,
  step = 0.25,
): PerceivedTimeScale {
  const steps = Math.round(maxAge / step);
  const cumulative = new Array<number>(steps + 1);
  cumulative[0] = 0;

  for (let index = 1; index <= steps; index++) {
    const from = (index - 1) * step;
    const to = index * step;
    const midpoint = (from + to) / 2;
    cumulative[index] = cumulative[index - 1] + densityAt(midpoint, model) * step;
  }

  return { model, maxAge, step, cumulative, total: cumulative[steps] };
}

/** Shared, pre-computed scale built from {@link DEFAULT_LIFE_MODEL}. */
export const DEFAULT_PERCEIVED_TIME_SCALE = createPerceivedTimeScale();

/** Cumulative perceived time at `age`, linearly interpolated. */
export function cumulativeAt(age: number, scale: PerceivedTimeScale): number {
  const clamped = Math.min(Math.max(age, 0), scale.maxAge);
  const position = clamped / scale.step;
  const lower = Math.floor(position);
  const upper = Math.min(lower + 1, scale.cumulative.length - 1);
  const ratio = position - lower;
  return scale.cumulative[lower] + (scale.cumulative[upper] - scale.cumulative[lower]) * ratio;
}

/** Chronological age at which the cumulative perceived time reaches `target`. */
export function ageAtCumulative(target: number, scale: PerceivedTimeScale): number {  if (target <= 0) {
    return 0;
  }
  if (target >= scale.total) {
    return scale.maxAge;
  }
  let low = 0;
  let high = scale.cumulative.length - 1;
  while (low < high) {
    const middle = (low + high) >> 1;
    if (scale.cumulative[middle] < target) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  const upper = low;
  const lower = Math.max(0, upper - 1);
  const span = scale.cumulative[upper] - scale.cumulative[lower];
  const ratio = span === 0 ? 0 : (target - scale.cumulative[lower]) / span;
  return (lower + ratio) * scale.step;
}

/** Fraction (0..1) of the *expected lifespan* that has been perceived at `age`. */
export function perceivedFraction(age: number, lifespan: number, scale: PerceivedTimeScale): number {
  const total = cumulativeAt(lifespan, scale);
  if (total <= 0) {
    return 0;
  }
  return Math.min(1, Math.max(0, cumulativeAt(age, scale) / total));
}

export interface LifeUnitInsight {
  readonly id: string;
  readonly label: string;
  /** How many of these periods the perceived life so far is worth. */
  readonly livedUnits: number;
  /** How many of these periods the perceived remaining life is worth. */
  readonly remainingUnits: number;
}

export interface LifeInsights {
  readonly age: number;
  readonly lifespan: number;
  /** Perceived progress through the expected lifespan, 0..1. */
  readonly perceivedProgress: number;
  /** Chronological age equivalent to {@link perceivedProgress} on the expected lifespan. */
  readonly perceivedAge: number;
  /** Chronological age at which perceived progress reaches 50%. */
  readonly midpointAge: number;
  readonly units: readonly LifeUnitInsight[];
}

export function computeLifeInsights(
  age: number,
  lifespan: number,
  scale: PerceivedTimeScale = DEFAULT_PERCEIVED_TIME_SCALE,
  schoolStages: readonly SchoolStage[] = SCHOOL_STAGES,
): LifeInsights {
  const safeAge = Math.min(Math.max(age, 0), lifespan);
  const total = cumulativeAt(lifespan, scale);
  const lived = cumulativeAt(safeAge, scale);
  const remaining = Math.max(0, total - lived);
  const perceivedProgress = total > 0 ? lived / total : 0;

  const units = schoolStages.map((stage) => {
    const unitLength = cumulativeAt(stage.endAge, scale) - cumulativeAt(stage.startAge, scale);
    return {
      id: stage.id,
      label: stage.label,
      livedUnits: unitLength > 0 ? lived / unitLength : 0,
      remainingUnits: unitLength > 0 ? remaining / unitLength : 0,
    };
  });

  return {
    age: safeAge,
    lifespan,
    perceivedProgress,
    perceivedAge: perceivedProgress * lifespan,
    midpointAge: ageAtCumulative(total / 2, scale),
    units,
  };
}
