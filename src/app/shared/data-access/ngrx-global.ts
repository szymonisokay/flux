import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { exerciseReducer } from './exercises/exercise.reducer';
import { ExerciseEffects } from './exercises/exercise.effects';

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  exercises: exerciseReducer,
};

export const appEffects = [AuthEffects, ExerciseEffects];
