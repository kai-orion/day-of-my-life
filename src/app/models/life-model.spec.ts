import { describe, expect, it } from 'vitest';
import {
  ageAtCumulative,
  computeLifeInsights,
  createPerceivedTimeScale,
  cumulativeAt,
  densityAt,
  DEFAULT_LIFE_MODEL,
  perceivedFraction,
} from './life-model';

const scale = createPerceivedTimeScale();

describe('life-model', () => {
  it('perceives time more slowly as we age within a stage', () => {
    expect(densityAt(10, DEFAULT_LIFE_MODEL)).toBeGreaterThan(densityAt(17, DEFAULT_LIFE_MODEL));
  });

  it('never perceives time before memory forms', () => {
    expect(cumulativeAt(2.9, scale)).toBe(0);
    expect(densityAt(1, DEFAULT_LIFE_MODEL)).toBe(0);
  });

  it('produces a monotonically increasing cumulative curve', () => {
    let previous = -1;
    for (let age = 0; age <= 120; age += 5) {
      const value = cumulativeAt(age, scale);
      expect(value).toBeGreaterThan(previous);
      previous = value;
    }
  });

  it('places the subjective midpoint well before the chronological midpoint', () => {
    const lifespan = 80;
    const insights = computeLifeInsights(40, lifespan, scale);
    expect(insights.midpointAge).toBeLessThan(lifespan / 2);
  });

  it('inverts cumulativeAt with ageAtCumulative', () => {
    const target = cumulativeAt(37, scale);
    expect(ageAtCumulative(target, scale)).toBeCloseTo(37, 1);
  });

  it('reports more remaining school-lengths for a child than an adult', () => {
    const lifespan = 80;
    const child = computeLifeInsights(10, lifespan, scale);
    const adult = computeLifeInsights(50, lifespan, scale);

    const childPrimary = child.units.find((unit) => unit.id === 'primary');
    const adultPrimary = adult.units.find((unit) => unit.id === 'primary');

    expect(childPrimary?.remainingUnits ?? 0).toBeGreaterThan(adultPrimary?.remainingUnits ?? 0);
    expect(perceivedFraction(10, lifespan, scale)).toBeLessThan(perceivedFraction(50, lifespan, scale));
  });
});
