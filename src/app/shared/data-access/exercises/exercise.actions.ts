import { createAction, props } from '@ngrx/store';
import { ExerciseActions } from './interfaces/exercise-actions.interface';
import { Exercise } from './interfaces/exercise.interface';

export const fetchExercises = createAction(ExerciseActions.FETCH_EXERCISES);

export const fetchExercisesSuccess = createAction(
  ExerciseActions.FETCH_EXERCISES_SUCCESS,
  props<{ exercises: Exercise[] }>()
);

export const fetchExercisesFailure = createAction(
  ExerciseActions.FETCH_EXERCISES_FAILURE,
  props<{ error: string }>()
);

export const exercisePageChange = createAction(
  ExerciseActions.EXERCISE_PAGE_CHANGE,
  props<{ page: number }>()
);

export const exerciseSearchTermChange = createAction(
  ExerciseActions.EXERCISE_SEARCH_TERM_CHANGE,
  props<{ searchTerm: string }>()
);

export const exerciseSearchTermChangeSuccess = createAction(
  ExerciseActions.EXERCISE_SEARCH_TERM_CHANGE_SUCCESS,
  props<{ searchTerm: string; exercises: Exercise[] }>()
);
