import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Canonical site origin used for `<link rel="canonical">` and absolute URLs in
 * structured data. Set this to the deployed origin (for example
 * `https://example.com`) so the prerendered landing page ships absolute URLs;
 * leave it empty to omit canonical/`og:url` tags.
 */
export const SITE_ORIGIN: string = '';

export type RobotsPolicy = 'index,follow' | 'noindex,follow' | 'noindex,nofollow';

export interface SeoConfig {
  readonly title: string;
  /** Meta description; omit for pages that should not be indexed in detail. */
  readonly description?: string;
  /** Route path used for the canonical URL, e.g. `'/'` or `'report'`. */
  readonly path?: string;
  readonly robots?: RobotsPolicy;
  /** JSON-LD structured data injected into `<head>`. */
  readonly structuredData?: Readonly<Record<string, unknown>>;
}

const STRUCTURED_DATA_ID = 'seo-structured-data';

/**
 * Per-page SEO metadata for a zoneless, prerendered Angular app: title, meta
 * description, robots policy, canonical URL and JSON-LD structured data. Safe
 * under server rendering, so the prerendered landing page ships the full set of
 * tags in its static HTML.
 */
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  public apply(config: SeoConfig): void {
    this.titleService.setTitle(config.title);
    this.setMeta('name', 'robots', config.robots ?? 'index,follow');

    if (config.description !== undefined) {
      this.setMeta('name', 'description', config.description);
      this.setMeta('name', 'twitter:description', config.description);
      this.setMeta('property', 'og:description', config.description);
    }

    this.setMeta('property', 'og:title', config.title);
    this.setMeta('property', 'og:type', 'website');
    this.setMeta('name', 'twitter:title', config.title);
    this.setMeta('name', 'twitter:card', 'summary_large_image');

    const canonical = this.absoluteUrl(config.path);
    if (canonical !== '') {
      this.setCanonical(canonical);
      this.setMeta('property', 'og:url', canonical);
    }

    this.setStructuredData(config.structuredData);
  }

  private setMeta(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content });
  }

  private absoluteUrl(path?: string): string {
    if (SITE_ORIGIN === '') {
      return '';
    }
    const origin = SITE_ORIGIN.replace(/\/+$/, '');
    const suffix =
      path === undefined || path === '' || path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
    return `${origin}${suffix}`;
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    for (const existing of Array.from(head.querySelectorAll('link[rel="canonical"]'))) {
      existing.remove();
    }
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    head.appendChild(link);
  }

  private setStructuredData(data?: Readonly<Record<string, unknown>>): void {
    const head = this.document.head;
    // Always recreate: server DOM `querySelector` results are not reliably
    // `null`, and a single replace keeps client hydration duplicate-free.
    for (const existing of Array.from(head.querySelectorAll(`script#${STRUCTURED_DATA_ID}`))) {
      existing.remove();
    }
    if (data === undefined) {
      return;
    }

    const script = this.document.createElement('script');
    script.id = STRUCTURED_DATA_ID;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    head.appendChild(script);
  }
}
