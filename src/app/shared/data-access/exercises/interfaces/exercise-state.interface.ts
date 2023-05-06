import { Status } from '../../../interfaces/status.interface';
import { Exercise } from './exercise.interface';

export interface ExerciseState {
  exercises: Exercise | Exercise[] | null;
  page: number;
  pageSize: number;
  total: number;
  status: Status;
  searchValues: ExerciseSearchValuesState;
}

export interface ExerciseSearchValuesState {
  term: string;
  category: string;
  muscle: string;
  force: string;
  difficulty: string;
}

const searchValues: ExerciseSearchValuesState = {
  term: '',
  category: '',
  muscle: '',
  force: '',
  difficulty: '',
};

export const initialState: ExerciseState = {
  exercises: null,
  status: 'pending',
  page: 1,
  pageSize: 10,
  total: 1,
  searchValues: searchValues,
};
