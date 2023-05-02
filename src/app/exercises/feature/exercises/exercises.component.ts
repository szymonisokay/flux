import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/interfaces/app-state.interface';
import {
  exercisePageChange,
  exerciseSearchTermChange,
  fetchExercises,
} from '../../../shared/data-access/exercises/exercise.actions';
import {
  exercisePageSelector,
  exerciseStatusSelector,
  exerciseTotalSelector,
  exercisesSelector,
} from '../../../shared/data-access/exercises/exercise.selectors';
import { Observable, combineLatest, map } from 'rxjs';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';

@Component({
  selector: 'flux-exercises',
  templateUrl: './exercises.component.html',
})
export class ExercisesComponent implements OnInit {
  exercises$ = this.store.select(exercisesSelector) as Observable<Exercise[]>;
  page$ = this.store.select(exercisePageSelector);
  total$ = this.store.select(exerciseTotalSelector);
  status$ = this.store.select(exerciseStatusSelector);

  vm$ = combineLatest([
    this.exercises$,
    this.page$,
    this.total$,
    this.status$,
  ]).pipe(
    map(([exercises, page, total, status]) => ({
      exercises,
      page,
      total,
      status,
    }))
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchExercises());
  }

  onPageChange(page: number) {
    this.store.dispatch(exercisePageChange({ page }));
  }

  onSearchChange(searchTerm: string) {
    this.store.dispatch(exerciseSearchTermChange({ searchTerm }));
  }
}
