import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // The landing page is static marketing content: prerender it to real HTML so
  // search engines and social scrapers see the copy without running JavaScript.
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  // Setup and report are user-specific and read from local storage, so they are
  // rendered on the client only — and excluded from indexing (see `robots.txt`
  // and the `noindex` meta tag set by `SeoService`).
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
