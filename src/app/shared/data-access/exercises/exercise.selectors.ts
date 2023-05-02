import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { ExerciseState } from './interfaces/exercise-state.interface';

export const exerciseFeatureSelector = (state: AppState) => state.exercises;

export const exercisesSelector = createSelector(
  exerciseFeatureSelector,
  (state: ExerciseState) => state.exercises
);

export const exercisePageSelector = createSelector(
  exerciseFeatureSelector,
  (state: ExerciseState) => state.page
);

export const exercisePageSizeSelector = createSelector(
  exerciseFeatureSelector,
  (state: ExerciseState) => state.pageSize
);

export const exerciseTotalSelector = createSelector(
  exerciseFeatureSelector,
  (state: ExerciseState) => state.total
);

export const exerciseStatusSelector = createSelector(
  exerciseFeatureSelector,
  (state: ExerciseState) => state.status
);
