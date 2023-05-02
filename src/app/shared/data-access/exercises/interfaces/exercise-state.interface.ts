import { Status } from '../../../interfaces/status.interface';
import { Exercise } from './exercise.interface';

export interface ExerciseState {
  exercises: Exercise | Exercise[] | null;
  page: number;
  pageSize: number;
  total: number;
  status: Status;
  searchTerm: string;
}
