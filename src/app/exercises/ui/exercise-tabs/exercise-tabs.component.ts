import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ExerciseTab } from '../../../../config/tabs.config';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';

@Component({
  selector: 'ui-exercise-tabs',
  templateUrl: './exercise-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTabsComponent {
  @Input() template: ExerciseTab;
  @Input() exercise: Exercise;

  getDetails(exercise: Exercise) {
    const {
      id,
      details,
      exercise_name,
      steps,
      target,
      videoURL,
      youtubeURL,
      ...rest
    } = exercise;

    const exerciseDetails: any = {
      ...rest,
      primary: target.Primary.toString().split(',').join(', '),
      secondary: target.Secondary ? target.Secondary?.toString() : null,
    };

    if (!target.Secondary) {
      delete exerciseDetails.secondary;
    }

    return exerciseDetails;
  }
}
