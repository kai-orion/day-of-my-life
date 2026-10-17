import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { MyLifeService } from './my-life.service';

describe('MyLifeService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('derives the deathday from the birthday and lifespan', () => {
    const service = TestBed.inject(MyLifeService);

    service.updateBirthday('2000-01-01');
    service.updateLifespan(10);

    expect(service.deathday()).toBe('2010-01-01');
    expect(service.lifetimeDays()).toBeGreaterThan(3650);
  });

  it('persists the configured settings in local storage', () => {
    const service = TestBed.inject(MyLifeService);

    service.update({ birthday: '1990-05-20', lifespanYears: 90, countryCode: 'JP' });

    expect(JSON.parse(localStorage.getItem('_my-life_') ?? '{}')).toEqual({
      birthday: '1990-05-20',
      lifespanYears: 90,
      countryCode: 'JP',
    });
  });

  it('applies a country average when selecting a country', () => {
    const service = TestBed.inject(MyLifeService);

    service.updateCountry('JP');

    expect(service.countryCode()).toBe('JP');
    expect(service.lifespanYears()).toBe(84);
  });

  it('migrates the legacy deathday format into a lifespan', () => {
    localStorage.setItem('_my-life_', JSON.stringify({ birthday: '2000-01-01', deathday: '2050-01-01' }));

    const service = TestBed.inject(MyLifeService);

    expect(service.birthday()).toBe('2000-01-01');
    expect(service.lifespanYears()).toBe(50);
  });
});
