export interface Endpoint {
  path: string;
}

export interface Endpoints {
  login: Endpoint;
  register: Endpoint;

  userInfo: Endpoint;

  // Rapid API exercises
  rapidApiAttributes: Endpoint;
  rapidApiExercises: Endpoint;
  rapidApiExercise: Endpoint;
}
