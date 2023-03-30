import { createAction, props } from '@ngrx/store';
import { AuthActions } from '../../interfaces/auth-actions.interface';
import {
  UserLoginData,
  UserRegisterData,
} from '../../interfaces/user.interface';

export const login = createAction(
  AuthActions.LOGIN,
  props<{ user: UserLoginData }>()
);
export const register = createAction(
  AuthActions.REGISTER,
  props<{ user: UserRegisterData }>()
);
