import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import * as authActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(({ user }) =>
        this.authApiService.login(user).pipe(
          map((userWithToken) => authActions.loginSuccess({ userWithToken })),
          tap(() => this.router.navigate([''])),
          catchError((error) =>
            of(authActions.loginFailure({ error: error.error }))
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.register),
      switchMap(({ user }) =>
        this.authApiService.register(user).pipe(
          map((userWithToken) =>
            authActions.registerSuccess({ userWithToken })
          ),
          tap(() => this.router.navigate([''])),
          catchError((error) =>
            of(authActions.loginFailure({ error: error.error }))
          )
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logout),
      switchMap(({ message }) =>
        this.authApiService.logout(message).pipe(
          map((message) => authActions.logoutSuccess({ message })),
          tap(() => this.router.navigate(['/login']))
        )
      )
    )
  );

  userInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.userInfo),
      switchMap(() =>
        this.authApiService.userInfo().pipe(
          map((userInfo) => authActions.userInfoSuccess({ user: userInfo })),
          catchError((error) => {
            console.log(error.error);
            return of(authActions.userInfoFailure({ error: error.error })).pipe(
              tap(() => this.router.navigate(['/login']))
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
    private router: Router
  ) {}
}
