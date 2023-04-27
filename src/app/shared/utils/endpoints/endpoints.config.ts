import { environment } from '../../../../environment/environment';
import { Endpoint, Endpoints } from './endpoints.interface';

export const getEndpoint = (endpoint: keyof Endpoints): Endpoint => {
  return { path: `${environment.baseApiUrl}${endpoints[endpoint].path}` };
};

export const getRapidApiEndpoint = (endpoint: keyof Endpoints): Endpoint => {
  return { path: endpoints[endpoint].path };
};

export const endpoints: Endpoints = {
  login: { path: '/auth/login' },
  register: { path: '/auth/register' },

  userInfo: { path: '/users/info' },

  // Rapid API exercises
  rapidApiAttributes: {
    path: 'https://musclewiki.p.rapidapi.com/exercises/attributes',
  },
  rapidApiExercises: { path: 'https://musclewiki.p.rapidapi.com/exercises' },
  rapidApiExercise: {
    path: 'https://musclewiki.p.rapidapi.com/exercises/{id}',
  },
};
