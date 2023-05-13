import { createReducer, on } from '@ngrx/store';
import {
  ExerciseSearchValuesState,
  ExerciseState,
  initialState,
} from './interfaces/exercise-state.interface';
import * as exerciseActions from './exercise.actions';
import { Exercise } from './interfaces/exercise.interface';

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
  on(exerciseActions.fetchExercise, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(exerciseActions.fetchExerciseSuccess, (state, action) => {
    return {
      ...state,
      exercises: action.exercise,
      total: 1,
      status: 'success',
    };
  }),
  on(exerciseActions.fetchExerciseFailure, (state, action) => ({
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
    searchValues: {
      ...state.searchValues,
      term: action.searchTerm,
    },
  })),
  on(exerciseActions.exerciseAdvancedSearchValuesChange, (state, action) => ({
    ...state,
    status: 'loading',
    searchValues: {
      ...state.searchValues,
      [action.advancedSearchValue.type]: action.advancedSearchValue.value,
    },
  }))
);

const paginateArray = (exercises: Exercise[], state: ExerciseState) => {
  const { page, pageSize, searchValues } = state;

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  const paginatedExercises = applyFiltering(exercises, searchValues);

  return {
    exercises: paginatedExercises.slice(start, end),
    total: paginatedExercises.length,
  };
};

const applyFiltering = (
  exercises: Exercise[],
  searchValues: ExerciseSearchValuesState
) => {
  let filteredExercises: Exercise[] = exercises;

  filteredExercises = filteredExercises.filter((exercise) =>
    exercise.exercise_name.toLowerCase().includes(searchValues.term)
  );

  filteredExercises = filteredExercises.filter((exercise) =>
    searchValues.category
      ? exercise.Category === searchValues.category
      : exercise
  );

  filteredExercises = filteredExercises
    .filter((exercise) => exercise.target)
    .filter((exercise) =>
      searchValues.muscle
        ? exercise.target?.Primary?.includes(searchValues.muscle)
        : exercise
    );

  filteredExercises = filteredExercises.filter((exercise) =>
    searchValues.force ? exercise.Force === searchValues.force : exercise
  );

  filteredExercises = filteredExercises.filter((exercise) =>
    searchValues.difficulty
      ? exercise.Difficulty === searchValues.difficulty
      : exercise
  );

  return filteredExercises;
};
