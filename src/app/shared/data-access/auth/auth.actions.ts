import { createAction, props } from '@ngrx/store';
import { AuthActions } from '../../interfaces/auth-actions.interface';
import {
  UserLoginData,
  UserRegisterData,
  UserWithToken,
} from '../../interfaces/user.interface';
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
