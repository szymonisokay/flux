import { Component, Input } from '@angular/core';
import { Exercise } from '../../../shared/data-access/exercises/interfaces/exercise.interface';

@Component({
  selector: 'ui-exercise-card',
  templateUrl: './exercise-card.component.html',
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise;

  playVideo(video: HTMLVideoElement) {
    video.paused ? video.play() : video.pause();
  }
}
