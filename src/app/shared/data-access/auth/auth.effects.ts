import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerSuccess,
} from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ user }) =>
        this.authApiService.login(user).pipe(
          map((userWithToken) => loginSuccess({ userWithToken })),
          catchError((error) => of(loginFailure({ error: error.error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ user }) =>
        this.authApiService.register(user).pipe(
          map((userWithToken) => registerSuccess({ userWithToken })),
          catchError((error) => of(loginFailure({ error: error.error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService
  ) {}
}
