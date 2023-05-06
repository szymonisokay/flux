import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as exerciseActions from './exercise.actions';
import { switchMap, map, catchError, of, exhaustMap } from 'rxjs';
import { ExerciseApiService } from './exercise-api.service';

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

  constructor(
    private actions$: Actions,
    private exerciseApiService: ExerciseApiService
  ) {}
}