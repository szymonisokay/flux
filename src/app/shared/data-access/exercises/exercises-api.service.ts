import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRapidApiEndpoint } from '../../utils/endpoints/endpoints.config';
import { environment } from '../../../../environment/environment';
import {
  Exercise,
  ExerciseAttributes,
} from '../../interfaces/exercises.interface';

const headers = {
  'content-type': 'application/octet-stream',
  'X-RapidAPI-Key': environment.exercisesApiKey,
  'X-RapidAPI-Host': environment.exercisesApiHost,
};

@Injectable({ providedIn: 'root' })
export class ExercisesApiService {
  constructor(private http: HttpClient) {}

  getAttributes() {
    const endpoint = getRapidApiEndpoint('rapidApiAttributes').path;

    return this.http.get<ExerciseAttributes>(endpoint, { headers });
  }

  getExercises() {
    const endpoint = getRapidApiEndpoint('rapidApiExercises').path;

    return this.http.get<Exercise[]>(endpoint, { headers });
  }

  getExercise(id: number) {
    const endpoint = getRapidApiEndpoint('rapidApiExercise').path.replace(
      '{id}',
      id.toString()
    );

    return this.http.get<Exercise>(endpoint, { headers });
  }
}
