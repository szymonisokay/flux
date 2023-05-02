import { Status } from '../../../interfaces/status.interface';
import { User } from './user.interface';

export interface AuthState {
  user: User | null;
  status: Status;
}
