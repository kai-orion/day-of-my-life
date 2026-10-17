/**
 * Country life-course profiles
 * ============================
 *
 * Approximate, comparable ages for the institutional milestones of a life:
 * when schooling starts and ends at each level, when people typically retire,
 * and the mean age at first childbirth.
 *
 * Figures are rough population averages drawn from education indicators
 * (OECD / UNESCO), national pension / retirement ages and UN World Population
 * Prospects fertility data. They exist for comparison, not as personal
 * predictions — a person's real timeline depends on their own choices.
 */
export interface CountryLifeCourse {
  /** ISO 3166-1 alpha-2 country code, or `''` for the default profile. */
  readonly code: string;
  /** Age at which formal education typically begins. */
  readonly schoolStartAge: number;
  /** Age at the end of primary education. */
  readonly primaryEndAge: number;
  /** Age at the end of upper-secondary (high school) education. */
  readonly secondaryEndAge: number;
  /** Age at the typical end of tertiary (university) education. */
  readonly tertiaryEndAge: number;
  /** Statutory / effective retirement age. */
  readonly retirementAge: number;
  /** Mean age of women at first childbirth. */
  readonly firstChildAge: number;
}

/** Fallback profile when no country is selected. */
export const DEFAULT_LIFE_COURSE: CountryLifeCourse = {
  code: '',
  schoolStartAge: 6,
  primaryEndAge: 12,
  secondaryEndAge: 18,
  tertiaryEndAge: 22,
  retirementAge: 65,
  firstChildAge: 28,
};

/**
 * Curated profiles for the tracked countries, in the same order as
 * {@link COUNTRY_LIFE_EXPECTANCY} (life expectancy descending).
 */
export const COUNTRY_LIFE_COURSE: readonly CountryLifeCourse[] = [
  { code: 'JP', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 31.0 },
  { code: 'KR', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 63, firstChildAge: 31.5 },
  { code: 'CH', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 19, tertiaryEndAge: 23, retirementAge: 65, firstChildAge: 31.0 },
  { code: 'AU', schoolStartAge: 5, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 29.5 },
  { code: 'ES', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 31.5 },
  { code: 'IT', schoolStartAge: 6, primaryEndAge: 11, secondaryEndAge: 19, tertiaryEndAge: 23, retirementAge: 67, firstChildAge: 31.5 },
  { code: 'SG', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 17, tertiaryEndAge: 21, retirementAge: 63, firstChildAge: 30.5 },
  { code: 'FR', schoolStartAge: 6, primaryEndAge: 11, secondaryEndAge: 18, tertiaryEndAge: 21, retirementAge: 64, firstChildAge: 29.5 },
  { code: 'NO', schoolStartAge: 6, primaryEndAge: 13, secondaryEndAge: 19, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 30.0 },
  { code: 'SE', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 19, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 29.5 },
  { code: 'CA', schoolStartAge: 5, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 29.5 },
  { code: 'IL', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 28.5 },
  { code: 'NZ', schoolStartAge: 5, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 29.5 },
  { code: 'IE', schoolStartAge: 5, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 30.5 },
  { code: 'NL', schoolStartAge: 5, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 30.0 },
  { code: 'FI', schoolStartAge: 7, primaryEndAge: 12, secondaryEndAge: 19, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 29.5 },
  { code: 'DK', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 19, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 30.0 },
  { code: 'PT', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 30.0 },
  { code: 'AT', schoolStartAge: 6, primaryEndAge: 10, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 29.5 },
  { code: 'BE', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 29.5 },
  { code: 'DE', schoolStartAge: 6, primaryEndAge: 10, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 30.0 },
  { code: 'GR', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 30.0 },
  { code: 'GB', schoolStartAge: 5, primaryEndAge: 11, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 66, firstChildAge: 29.5 },
  { code: 'US', schoolStartAge: 5, primaryEndAge: 11, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 67, firstChildAge: 27.0 },
  { code: 'AE', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 28.0 },
  { code: 'CN', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 60, firstChildAge: 27.5 },
  { code: 'TR', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 26.5 },
  { code: 'BR', schoolStartAge: 6, primaryEndAge: 11, secondaryEndAge: 17, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 26.5 },
  { code: 'MX', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 26.0 },
  { code: 'RU', schoolStartAge: 7, primaryEndAge: 11, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 65, firstChildAge: 26.0 },
  { code: 'IN', schoolStartAge: 6, primaryEndAge: 11, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 60, firstChildAge: 26.5 },
  { code: 'EG', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 60, firstChildAge: 25.0 },
  { code: 'ID', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 58, firstChildAge: 25.0 },
  { code: 'ZA', schoolStartAge: 6, primaryEndAge: 13, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 60, firstChildAge: 25.5 },
  { code: 'NG', schoolStartAge: 6, primaryEndAge: 12, secondaryEndAge: 18, tertiaryEndAge: 22, retirementAge: 60, firstChildAge: 25.0 },
];

/** Looks up a country's life-course profile, falling back to the default. */
export function findLifeCourse(code: string): CountryLifeCourse {
  return COUNTRY_LIFE_COURSE.find((course) => course.code === code) ?? DEFAULT_LIFE_COURSE;
}
