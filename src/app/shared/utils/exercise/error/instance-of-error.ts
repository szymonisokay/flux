export interface ExerciseApiErrorModel {
  error: string;
}

export const instanceOfExerciseApiError = (
  object: any
): object is ExerciseApiErrorModel => {
  return 'error' in object;
};
