import { effect, Injectable, signal } from '@angular/core';

const StorageKey = '_theme_';

/**
 * Controls the Material Design color scheme by toggling the `dark` attribute
 * on the document root. `@sandlada/material-design-css` resolves the
 * `light-dark()` color tokens based on this attribute (see `preset.css`).
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public readonly isDark = signal(this.readInitialPreference());

  constructor() {
    effect(() => {
      const isDark = this.isDark();
      document.documentElement.toggleAttribute('dark', isDark);
      localStorage.setItem(StorageKey, isDark ? 'dark' : 'light');
    });
  }

  public toggle(): void {
    this.isDark.update((value) => !value);
  }

  private readInitialPreference(): boolean {
    const stored = localStorage.getItem(StorageKey);
    if (stored !== null) {
      return stored === 'dark';
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
