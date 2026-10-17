# DayOfMyLife

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is built with:

- **Angular 22** — standalone components, zoneless change detection and the `@angular/build` application builder.
- **Tailwind CSS v4** — configured through `@tailwindcss/postcss` (`.postcssrc.json`).
- **[@sandlada/material-design-css](https://material-design-css.sandlada.com)** — Material Design 3 design tokens (colors, typography, shape, spacing, motion). Light/dark mode is toggled with the `dark` attribute on the document root.
- **[@sandlada/mdc](https://mdc.sandlada.com)** — Material 3 Expressive web components. Used where a component replaces hand-rolled UI, e.g. `app-calendar` wraps the `mdc-date-picker` custom element.
- **Vitest** — unit tests run through the `@angular/build:unit-test` builder.

There is no Angular Material, `@material/web` or `@angular/cdk` dependency; the UI is composed from the self-built components under `src/app/components`. Where a component from `@sandlada/mdc` is used instead, it sits behind an Angular wrapper in that same folder so consumers still talk to Angular APIs.

The app uses Angular hybrid rendering: the landing page (`/`) is prerendered to static HTML at build time for SEO (`outputMode: "static"`), while `/setup` and `/report` are rendered in the browser. Shared code is organised under `src/app` as `components/`, `models/`, `pages/`, `layouts/`, `states/`, `routers/`, `guards/` and `services/`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
