import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth-state.interface';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './auth.actions';

export const initialState: AuthState = {
  status: 'pending',
  user: null,
  token: null,
};

const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, status: 'loading' })),
  on(loginSuccess, (state, action) => ({
    ...state,
    status: 'success',
    user: action.userWithToken.result.user,
    token: action.userWithToken.result.token,
  })),
  on(loginFailure, (state, action) => ({
    ...state,
    status: 'error',
  })),
  on(register, (state, action) => ({ ...state, status: 'loading' })),
  on(registerSuccess, (state, action) => ({
    ...state,
    status: 'success',
    user: action.userWithToken.result.user,
    token: action.userWithToken.result.token,
  })),
  on(registerFailure, (state, action) => ({ ...state, status: 'error' }))
);

export const reducers = (state: AuthState, action: Action) =>
  authReducer(state, action);
