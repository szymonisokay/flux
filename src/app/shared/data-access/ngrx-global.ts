import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const appEffects = [AuthEffects];
