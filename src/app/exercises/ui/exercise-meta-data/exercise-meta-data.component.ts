import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';
import { getDifficultyClass } from '../../../shared/utils/exercise/difficulty-class/difficulty-class';

@Component({
  selector: 'ui-exercise-meta-data',
  templateUrl: './exercise-meta-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseMetaDataComponent {
  @Input() exercise: Exercise;
  @Input() compact: boolean = false;

  getDifficultyClass(difficulty: string): string {
    return getDifficultyClass(difficulty);
  }
}
