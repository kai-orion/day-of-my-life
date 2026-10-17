# AGENTS.md

DayOfMyLife computes **subjective** life progress from a birth date and expected lifespan, then visualizes it. The point is that perceived time is *not* linear (childhood feels slow, adulthood/retirement accelerate), so never substitute a simple `age / lifespan` ratio for the model.

## Commands

- `npm start` (or `ng serve`) — dev server on `http://localhost:4200`.
- `npm run build` — production build. `outputMode: "static"` prerenders `/` to real HTML for SEO and emits to `dist/day-of-my-life/browser`; that exact path is what the gh-pages workflow publishes.
- `npm test` (or `ng test`) — Vitest via the `@angular/build:unit-test` builder. Watch in a TTY, one-shot otherwise.
- Focused run: `ng test --filter "<regex>"`, e.g. `ng test --filter life-model`.
- There is **no lint/format script and no ESLint/Prettier config** — don't invent `npm run lint`. VS Code does format-on-save.

## Architecture

- **Angular 22, standalone, zoneless** (`provideZonelessChangeDetection`, no Zone.js). Every component uses `ChangeDetectionStrategy.OnPush`; state is signals. Mutating a plain class field will not update the view — read/write signals.
- Signal state services live in `src/app/states`: `MyLifeService` (birthday/lifespan) and `ThemeService`. They persist to `localStorage` under `_my-life_` and `_theme_`; `MyLifeService` still migrates the legacy `{ birthday, deathday }` shape.
- Routing lives in `src/app/routers`. `app.routes.ts` wraps every page in `layouts/app-shell` and lazy-loads three pages: `pages/landing` (`/`, public), `pages/setup` (`/setup`, onboarding) and `pages/report` (`/report`). `SetupGuard` sends visitors without a configured birthday to `/setup`. `app.routes.server.ts` prerenders only `/` (`RenderMode.Prerender`) and client-renders the rest.
- SEO: `services/seo.service.ts` sets title, meta description, robots, canonical and JSON-LD, and is server-render safe. `/` is indexable; `/setup` and `/report` are `noindex` and disallowed in `public/robots.txt`. Set `SITE_ORIGIN` in `seo.service.ts` to emit absolute canonical/sitemap URLs.
- Forms use the new **Signal Forms** API, not reactive forms or `ngModel`: `form(model, (path) => { required/min/max/validate(...) })` from `@angular/forms/signals`, plus the `FormField` directive in `imports`.
- Domain math lives in `src/app/models/life-model.ts` — **read its header comment before changing progress logic.** Subjective time = logarithmic age density × per-life-stage weight; `DEFAULT_PERCEIVED_TIME_SCALE` is precomputed, use `cumulativeAt`/`computeLifeInsights` instead of recomputing.
- `components/life-chart/life-chart.component.ts` is the only Three.js code: an imperative scene built in `afterNextRender` and torn down via `DestroyRef`. It resolves MD3 colors from CSS vars at runtime and rebuilds when the theme changes. Always dispose geometries/materials/renderer; keep the WebGL-unavailable fallback.

## UI / styling conventions

- Material Design 3 comes from `@sandlada/material-design-css` tokens + Tailwind v4. Style with `var(--md-sys-color-*)` / shape/typography tokens. There is **no Angular Material, no CDK, no `@material/web`**.
- Dark mode is the `dark` attribute on `<html>` (toggled by `ThemeService`), not Tailwind's `dark:` variant. `styles.css` declares `@source "../src"` so Tailwind scans source.
- `@sandlada/mdc` web components must be wrapped behind an Angular component in `src/app/components` (see `calendar.component.ts` wrapping `mdc-date-picker` with `CUSTOM_ELEMENTS_SCHEMA`). Consumers import the wrapper, never the raw custom element.
- UI intent is serious, calm and data-first: minimize decoration so attention stays on the numbers.

## Testing

- Specs are `*.spec.ts` colocated with source; they run under Vitest. `src/test-setup.ts` stubs `Element.animate` / `ElementInternals` so jsdom can upgrade the MD3 web components.
- **Project convention: do not add new `*.spec.ts` files.** Existing specs may still be run.

## File naming (from `angular.json` schematics)

`*.component.ts`, `*.service.ts`, `*.guard.ts`, `*.routes.ts`, `*.data.ts`. Top-level folders under `src/app`: `components/` (presentational UI), `models/` (pure domain logic + data), `pages/` (routed pages), `layouts/`, `states/` (signal stores), `routers/`, `guards/`, `services/`.
