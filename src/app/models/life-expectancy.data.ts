export interface CountryLifeExpectancy {
  /** ISO 3166-1 alpha-2 country code. */
  readonly code: string;
  readonly name: string;
  /**
   * Approximate life expectancy at birth for both sexes combined, in years.
   * Figures are rounded from WHO / UN World Population Prospects estimates.
   */
  readonly lifeExpectancy: number;
}

/** Global average life expectancy at birth, both sexes (years). */
export const WORLD_AVERAGE_LIFE_EXPECTANCY = 73.4;

/**
 * A curated list of major countries, sorted by life expectancy (descending).
 * Values are approximate and intended for comparison, not for official use.
 */
export const COUNTRY_LIFE_EXPECTANCY: readonly CountryLifeExpectancy[] = [
  { code: 'JP', name: 'Japan', lifeExpectancy: 84.0 },
  { code: 'KR', name: 'South Korea', lifeExpectancy: 83.5 },
  { code: 'CH', name: 'Switzerland', lifeExpectancy: 83.4 },
  { code: 'AU', name: 'Australia', lifeExpectancy: 83.2 },
  { code: 'ES', name: 'Spain', lifeExpectancy: 83.2 },
  { code: 'IT', name: 'Italy', lifeExpectancy: 83.0 },
  { code: 'SG', name: 'Singapore', lifeExpectancy: 82.9 },
  { code: 'FR', name: 'France', lifeExpectancy: 82.9 },
  { code: 'NO', name: 'Norway', lifeExpectancy: 82.6 },
  { code: 'SE', name: 'Sweden', lifeExpectancy: 82.6 },
  { code: 'CA', name: 'Canada', lifeExpectancy: 82.6 },
  { code: 'IL', name: 'Israel', lifeExpectancy: 82.6 },
  { code: 'NZ', name: 'New Zealand', lifeExpectancy: 82.5 },
  { code: 'IE', name: 'Ireland', lifeExpectancy: 82.4 },
  { code: 'NL', name: 'Netherlands', lifeExpectancy: 82.2 },
  { code: 'FI', name: 'Finland', lifeExpectancy: 82.1 },
  { code: 'DK', name: 'Denmark', lifeExpectancy: 81.9 },
  { code: 'PT', name: 'Portugal', lifeExpectancy: 81.9 },
  { code: 'AT', name: 'Austria', lifeExpectancy: 81.6 },
  { code: 'BE', name: 'Belgium', lifeExpectancy: 81.6 },
  { code: 'DE', name: 'Germany', lifeExpectancy: 81.4 },
  { code: 'GR', name: 'Greece', lifeExpectancy: 81.4 },
  { code: 'GB', name: 'United Kingdom', lifeExpectancy: 81.3 },
  { code: 'US', name: 'United States', lifeExpectancy: 79.3 },
  { code: 'AE', name: 'United Arab Emirates', lifeExpectancy: 79.2 },
  { code: 'CN', name: 'China', lifeExpectancy: 78.6 },
  { code: 'TR', name: 'Turkey', lifeExpectancy: 78.6 },
  { code: 'BR', name: 'Brazil', lifeExpectancy: 75.9 },
  { code: 'MX', name: 'Mexico', lifeExpectancy: 75.0 },
  { code: 'RU', name: 'Russia', lifeExpectancy: 73.2 },
  { code: 'IN', name: 'India', lifeExpectancy: 70.8 },
  { code: 'EG', name: 'Egypt', lifeExpectancy: 70.2 },
  { code: 'ID', name: 'Indonesia', lifeExpectancy: 68.6 },
  { code: 'ZA', name: 'South Africa', lifeExpectancy: 65.3 },
  { code: 'NG', name: 'Nigeria', lifeExpectancy: 62.0 },
];

export function findCountry(code: string): CountryLifeExpectancy | undefined {
  return COUNTRY_LIFE_EXPECTANCY.find((country) => country.code === code);
}
