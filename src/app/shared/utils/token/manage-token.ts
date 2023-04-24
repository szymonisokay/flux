import { Observable, of } from 'rxjs';

export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string => {
  const token = localStorage.getItem('token');

  return token ?? '';
};

export const getToken$ = (): Observable<string> => {
  return of(getToken());
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};
