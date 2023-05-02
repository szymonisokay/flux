import { Component, Input } from '@angular/core';
import {
  Exercise,
  ExerciseDifficulties,
} from '../../../shared/data-access/exercises/interfaces/exercise.interface';
import { getDifficultyClass } from '../../../shared/utils/exercise/difficulty-class/difficulty-class';

@Component({
  selector: 'flux-exercise-card',
  templateUrl: './exercise-card.component.html',
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise;

  playVideo(video: HTMLVideoElement) {
    video.paused ? video.play() : video.pause();
  }

  getDifficultyClass(difficulty: string): string {
    return getDifficultyClass(difficulty);
  }
}
