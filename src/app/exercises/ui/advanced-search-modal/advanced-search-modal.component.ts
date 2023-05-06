import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Status } from '../../../shared/interfaces/status.interface';
import {
  ExerciseCategory,
  ExerciseDifficulties,
  ExerciseForces,
  ExerciseMuscles,
} from '../../../shared/data-access/exercises/interfaces/exercise.interface';
import { ExerciseSearchValuesState } from '../../../shared/data-access/exercises/interfaces/exercise-state.interface';
import {
  AdvancedSearchModel,
  AdvancedSearchTypes,
} from '../../interfaces/advanced-search.interface';

@Component({
  selector: 'ui-advanced-search-modal',
  templateUrl: './advanced-search-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedSearchModalComponent {
  @Input() isVisible: boolean = false;
  @Input() status: Status;
  @Input() total: number;
  @Input() searchValues: ExerciseSearchValuesState;

  @Output() closeModal = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();
  @Output() advancedSearchChange = new EventEmitter<AdvancedSearchModel>();

  categories = Object.values(ExerciseCategory);
  muscles = Object.values(ExerciseMuscles);
  difficulties = Object.values(ExerciseDifficulties);
  forces = Object.values(ExerciseForces);

  onModalClose() {
    this.closeModal.emit();
  }

  onValueChange(value: string, type: AdvancedSearchTypes) {
    this.advancedSearchChange.emit({ value: value ?? '', type });
  }

  onSearchChange(searchTerm: string) {
    this.searchChange.emit(searchTerm);
  }
}
