import { ExerciseDifficulties } from '../../../data-access/exercises/interfaces/exercise.interface';

export const getDifficultyClass = (difficulty: string): string => {
  switch (difficulty) {
    case ExerciseDifficulties.BEGINNER:
      return 'beginner';
    case ExerciseDifficulties.ADVANCED:
      return 'advanced';
    case ExerciseDifficulties.INTERMEDIATE:
      return 'intermediate';
    default:
      return '';
  }
};
