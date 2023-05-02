import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from './interfaces/auth-state.interface';
import * as authActions from './auth.actions';
import { saveToken, removeToken } from '../../utils/token/manage-token';

export const initialState: AuthState = {
  status: 'pending',
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, action) => ({ ...state, status: 'loading' })),
  on(authActions.loginSuccess, (state, action) => {
    saveToken(action.userWithToken.result.token);

    return {
      ...state,
      status: 'success',
      user: action.userWithToken.result.user,
    };
  }),
  on(authActions.loginFailure, (state, action) => ({
    ...state,
    status: 'error',
  })),
  on(authActions.register, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(authActions.registerSuccess, (state, action) => {
    saveToken(action.userWithToken.result.token);

    return {
      ...state,
      status: 'success',
      user: action.userWithToken.result.user,
    };
  }),
  on(authActions.registerFailure, (state, action) => ({
    ...state,
    status: 'error',
  })),
  on(authActions.userInfo, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(authActions.userInfoSuccess, (state, action) => ({
    ...state,
    status: 'success',
    user: action.user.result,
  })),
  on(authActions.userInfoFailure, (state, action) => {
    removeToken();

    return { ...state, status: 'error' };
  }),
  on(authActions.logout, (state, action) => {
    removeToken();

    return { ...state, status: 'loading' };
  }),
  on(authActions.logoutSuccess, (state, action) => {
    removeToken();

    return { ...state, status: 'success', user: null };
  })
);

export const reducers = (state: AuthState, action: Action) =>
  authReducer(state, action);
