import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/interfaces/app-state.interface';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { fetchExercise } from '../../../shared/data-access/exercises/exercise.actions';
import {
  exerciseStatusSelector,
  exercisesSelector,
} from '../../../shared/data-access/exercises/exercise.selectors';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';
import { ExerciseTab, exerciseTabs } from '../../../../config/tabs.config';

@Component({
  selector: 'flux-exercise',
  templateUrl: './exercise.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent {
  id$ = this.route.paramMap.pipe(
    tap((paramMap) =>
      this.store.dispatch(fetchExercise({ id: Number(paramMap.get('id')) }))
    )
  );

  tabs: ExerciseTab[] = Object.values(exerciseTabs as ExerciseTab[]);

  exercise$ = this.store.select(exercisesSelector) as Observable<Exercise>;
  status$ = this.store.select(exerciseStatusSelector);

  vm$ = combineLatest([this.exercise$, this.status$, this.id$]).pipe(
    map(([exercise, status]) => ({ exercise, status }))
  );

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
}
