import { createReducer, on } from '@ngrx/store';
import { ExerciseState } from './interfaces/exercise-state.interface';
import * as exerciseActions from './exercise.actions';
import { Exercise } from './interfaces/exercise.interface';

const initialState: ExerciseState = {
  exercises: null,
  status: 'pending',
  page: 1,
  pageSize: 10,
  total: 1,
  searchTerm: '',
};

export const exerciseReducer = createReducer(
  initialState,
  on(exerciseActions.fetchExercises, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(exerciseActions.fetchExercisesSuccess, (state, action) => {
    const { exercises, total } = paginateArray(action.exercises, state);

    return {
      ...state,
      exercises,
      total,
      status: 'success',
    };
  }),
  on(exerciseActions.fetchExercisesFailure, (state, action) => ({
    ...state,
    exercises: null,
    status: 'error',
  })),
  on(exerciseActions.exercisePageChange, (state, action) => ({
    ...state,
    page: action.page,
    status: 'loading',
  })),
  on(exerciseActions.exerciseSearchTermChange, (state, action) => ({
    ...state,
    status: 'loading',
    searchTerm: action.searchTerm,
  }))
);

const paginateArray = (exercises: Exercise[], state: ExerciseState) => {
  const { page, pageSize, searchTerm } = state;

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  const paginatedExercises = exercises.filter((exercise) =>
    exercise.exercise_name.toLowerCase().includes(searchTerm)
  );

  return {
    exercises: paginatedExercises.slice(start, end),
    total: paginatedExercises.length,
  };
};
