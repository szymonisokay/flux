import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { AuthState } from './interfaces/auth-state.interface';

export const authFeatureSelector = (state: AppState) => state.auth;

export const authStatusSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.status
);

export const authUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.user
);
