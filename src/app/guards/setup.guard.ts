import { inject, Injectable } from '@angular/core';
import { type CanActivate, type GuardResult, type MaybeAsync, Router } from '@angular/router';
import { MyLifeService } from '../states/my-life.service';

/**
 * Keeps the report behind a chosen birth date. A visitor who has not completed
 * setup is redirected to `/setup` instead of seeing a report full of zeroes.
 */
@Injectable({
  providedIn: 'root',
})
export class SetupGuard implements CanActivate {
  private readonly router = inject(Router);
  private readonly myLife = inject(MyLifeService);

  canActivate(): MaybeAsync<GuardResult> {
    return this.myLife.isConfigured() ? true : this.router.parseUrl('/setup');
  }
}
