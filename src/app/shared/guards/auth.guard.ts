import { Injectable, inject } from '@angular/core';
import { getToken$ } from '../utils/token/manage-token';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

export const authGuard = (): Observable<boolean> => {
  const router = inject(Router);

  return getToken$().pipe(
    switchMap((token) => {
      if (!token) {
        router.navigate(['/login']);
        return of(false);
      }

      return of(true);
    })
  );
};
