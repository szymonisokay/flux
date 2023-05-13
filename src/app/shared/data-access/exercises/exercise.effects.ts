import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as exerciseActions from './exercise.actions';
import { switchMap, map, catchError, of, exhaustMap, filter } from 'rxjs';
import { ExerciseApiService } from './exercise-api.service';
import { Exercise } from './interfaces/exercise.interface';
import { NavigationEnd } from '@angular/router';
import { instanceOfExerciseApiError } from '../../utils/exercise/error/instance-of-error';

@Injectable({ providedIn: 'root' })
export class ExerciseEffects {
  fetchExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        exerciseActions.fetchExercises,
        exerciseActions.exercisePageChange,
        exerciseActions.exerciseSearchTermChange,
        exerciseActions.exerciseAdvancedSearchValuesChange
      ),
      switchMap(() =>
        this.exerciseApiService.getExercises().pipe(
          map((exercises) =>
            exerciseActions.fetchExercisesSuccess({ exercises })
          ),
          catchError((error) =>
            of(exerciseActions.fetchExercisesFailure({ error }))
          )
        )
      )
    )
  );

  fetchExercise$ = createEffect(() =>
    this.actions$.pipe(
      ofType(exerciseActions.fetchExercise),
      switchMap(({ id }) =>
        this.exerciseApiService
          .getExercise(id)
          .pipe(
            map((response) =>
              instanceOfExerciseApiError(response)
                ? exerciseActions.fetchExerciseFailure({
                    error: response.error,
                  })
                : exerciseActions.fetchExerciseSuccess({ exercise: response })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private exerciseApiService: ExerciseApiService
  ) {}
}
