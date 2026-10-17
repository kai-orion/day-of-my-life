/**
 * Shared chart primitives
 * =======================
 *
 * The report is visualised with a handful of small, dependency-free SVG charts
 * rather than a charting library. Their inputs are described here so the pie,
 * donut and bar components share one vocabulary.
 *
 * Colors are CSS custom properties, so every chart adapts to light/dark mode
 * automatically without re-rendering.
 */

/** One slice / ring segment. */
export interface ChartSegment {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  /** CSS color; falls back to {@link CHART_PALETTE} by index. */
  readonly color?: string;
  /** Preformatted value shown in legends. */
  readonly display?: string;
}

/** One horizontal bar. */
export interface BarChartItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  /**
   * Explicit scale for this bar. Use it when each bar measures a different
   * whole (e.g. a per-item progress); defaults to the largest value in the set.
   */
  readonly max?: number;
  /** Preformatted value shown at the end of the row. */
  readonly display?: string;
  /** Preformatted secondary line under the label. */
  readonly caption?: string;
  /** CSS color; falls back to {@link CHART_PALETTE} by index. */
  readonly color?: string;
}

/** Categorical palette for data visualisation, defined in `styles.css`. */
export const CHART_PALETTE: readonly string[] = [
  'var(--chart-series-1)',
  'var(--chart-series-3)',
  'var(--chart-series-2)',
  'var(--chart-series-5)',
  'var(--chart-series-4)',
  'var(--chart-series-6)',
];

/** Resolves a segment's color, falling back to the palette. */
export function chartColor(item: { color?: string }, index: number): string {
  return item.color ?? CHART_PALETTE[index % CHART_PALETTE.length];
}

/** Rounds to three decimals so generated SVG paths stay compact. */
export function round(value: number, decimals = 3): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
