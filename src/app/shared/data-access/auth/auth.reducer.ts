import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth-state.interface';
import { login } from './auth.actions';

export const initialState: AuthState = {
  status: 'pending',
  user: null,
  errors: null,
  token: null,
};

const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, status: 'loading' }))
);

export const reducers = (state: AuthState, action: Action) =>
  authReducer(state, action);
