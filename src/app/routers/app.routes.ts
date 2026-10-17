import type { Routes } from '@angular/router';
import { SetupGuard } from '../guards/setup.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/app-shell/app-shell.component').then((m) => m.AppShellComponent),
    children: [
      {
        // Public, prerendered marketing page.
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('../pages/landing/landing.component').then((m) => m.LandingComponent),
      },
      {
        // Onboarding: choose a birth date and an expected lifespan.
        path: 'setup',
        loadComponent: () => import('../pages/setup/setup.component').then((m) => m.SetupComponent),
      },
      {
        // User-specific report, only reachable once setup is complete.
        path: 'report',
        canActivate: [SetupGuard],
        loadComponent: () =>
          import('../pages/report/report.component').then((m) => m.ReportComponent),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
