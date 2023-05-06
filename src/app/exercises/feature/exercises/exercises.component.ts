import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/interfaces/app-state.interface';
import {
  exerciseAdvancedSearchValuesChange,
  exercisePageChange,
  exerciseSearchTermChange,
  fetchExercises,
} from '../../../shared/data-access/exercises/exercise.actions';
import {
  exercisePageSelector,
  exerciseSearchValuesSelector,
  exerciseStatusSelector,
  exerciseTotalSelector,
  exercisesSelector,
} from '../../../shared/data-access/exercises/exercise.selectors';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';
import {
  AdvancedSearchModel,
  AdvancedSearchTypes,
} from '../../interfaces/advanced-search.interface';
import { ExerciseSearchValuesState } from '../../../shared/data-access/exercises/interfaces/exercise-state.interface';

@Component({
  selector: 'flux-exercises',
  templateUrl: './exercises.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent implements OnInit {
  exercises$ = this.store.select(exercisesSelector) as Observable<Exercise[]>;
  page$ = this.store.select(exercisePageSelector);
  total$ = this.store.select(exerciseTotalSelector);
  status$ = this.store.select(exerciseStatusSelector);
  searchValues$ = this.store.select(exerciseSearchValuesSelector);

  isModalVisible$ = new BehaviorSubject<boolean>(false);

  vm$ = combineLatest([
    this.exercises$,
    this.page$,
    this.total$,
    this.status$,
    this.searchValues$,
    this.isModalVisible$,
  ]).pipe(
    map(([exercises, page, total, status, searchValues, isModalVisible]) => ({
      exercises,
      page,
      total,
      status,
      searchValues,
      isModalVisible,
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

  onAdvancedSearchChange(
    advancedSearchValue: AdvancedSearchModel,
    page: number
  ) {
    this.store.dispatch(
      exerciseAdvancedSearchValuesChange({ advancedSearchValue })
    );

    if (page === 1) return;
    this.onPageChange(1);
  }

  onAdvancedSearchOpen() {
    this.isModalVisible$.next(true);
  }

  onModalClose() {
    this.isModalVisible$.next(false);
  }

  getTags(searchValues: ExerciseSearchValuesState) {
    const { ...values } = searchValues;

    let tags: AdvancedSearchModel[] = [];

    for (const [key, value] of Object.entries(values)) {
      tags.push({ value, type: key as AdvancedSearchTypes });
    }

    return tags.filter((tag) => tag.value);
  }
}
