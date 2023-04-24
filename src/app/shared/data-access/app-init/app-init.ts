import { EMPTY, tap } from 'rxjs';
import { getToken$ } from '../../utils/token/manage-token';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { userInfo } from '../auth/auth.actions';

export const appInit = (store: Store<AppState>) => {
  return () =>
    getToken$().pipe(
      tap((token) => (token ? store.dispatch(userInfo()) : EMPTY))
    );
};
