import { createAction, props } from '@ngrx/store';
import { AuthActions } from './interfaces/auth-actions.interface';
import {
  User,
  UserLoginData,
  UserRegisterData,
  UserWithToken,
} from './interfaces/user.interface';
import { ResultModel } from '../../interfaces/result.interface';

export const login = createAction(
  AuthActions.LOGIN,
  props<{ user: UserLoginData }>()
);

export const register = createAction(
  AuthActions.REGISTER,
  props<{ user: UserRegisterData }>()
);

export const loginSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{ userWithToken: ResultModel<UserWithToken> }>()
);

export const loginFailure = createAction(
  AuthActions.LOGIN_FAILURE,
  props<{ error: ResultModel<null> }>()
);

export const registerSuccess = createAction(
  AuthActions.REGISTER_SUCCESS,
  props<{ userWithToken: ResultModel<UserWithToken> }>()
);

export const registerFailure = createAction(
  AuthActions.REGISTER_FAILURE,
  props<{ error: ResultModel<null> }>()
);

export const userInfo = createAction(AuthActions.USER_INFO);

export const userInfoSuccess = createAction(
  AuthActions.USER_INFO_SUCCESS,
  props<{ user: ResultModel<User> }>()
);

export const userInfoFailure = createAction(
  AuthActions.USER_INFO_FAILURE,
  props<{ error: ResultModel<null> }>()
);

export const logout = createAction(
  AuthActions.LOGOUT,
  props<{ message: string }>()
);

export const logoutSuccess = createAction(
  AuthActions.LOGOUT_SUCCESS,
  props<{ message: string }>()
);

export const logoutFailure = createAction(
  AuthActions.LOGOUT_FAILURE,
  props<{ message: string }>()
);
