import { AuthState } from '../data-access/auth/interfaces/auth-state.interface';
import { ExerciseState } from '../data-access/exercises/interfaces/exercise-state.interface';

export interface AppState {
  auth: AuthState;
  exercises: ExerciseState;
}
