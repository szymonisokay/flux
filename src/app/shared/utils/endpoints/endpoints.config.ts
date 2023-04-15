import { environment } from '../../../../environment/environment';
import { Endpoint, Endpoints } from './endpoints.interface';

export const getEndpoint = (endpoint: keyof Endpoints): Endpoint => {
  return { path: `${environment.baseApiUrl}${endpoints[endpoint].path}` };
};

export const endpoints: Endpoints = {
  login: { path: '/auth/login' },
  register: { path: '/auth/register' },
};
