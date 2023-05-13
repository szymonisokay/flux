import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRapidApiEndpoint } from '../../utils/endpoints/endpoints.config';
import { environment } from '../../../../environment/environment';
import { Exercise, ExerciseAttributes } from './interfaces/exercise.interface';
import { Observable, of, shareReplay } from 'rxjs';

const headers = {
  'content-type': 'application/octet-stream',
  'X-RapidAPI-Key': environment.exercisesApiKey,
  'X-RapidAPI-Host': environment.exercisesApiHost,
};

@Injectable({ providedIn: 'root' })
export class ExerciseApiService {
  constructor(private http: HttpClient) {}

  getAttributes(): Observable<ExerciseAttributes> {
    const endpoint = getRapidApiEndpoint('rapidApiAttributes').path;

    return this.http.get<ExerciseAttributes>(endpoint, { headers });
  }

  getExercises(): Observable<Exercise[]> {
    const endpoint = getRapidApiEndpoint('rapidApiExercises').path;

    return this.http.get<Exercise[]>(endpoint, { headers });
  }

  getExercise(id: number): Observable<Exercise | { error: string }> {
    const endpoint = getRapidApiEndpoint('rapidApiExercise').path.replace(
      '{id}',
      id.toString()
    );

    return this.http.get<Exercise>(endpoint, { headers });
  }
}
