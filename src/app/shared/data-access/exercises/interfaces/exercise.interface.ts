export enum ExerciseCategory {
  BARBELL = 'Barbell',
  DUMBBELLS = 'Dumbbells',
  KETTLEBELLS = 'Kettlebells',
  STRETCHES = 'Stretches',
  CABLES = 'Cables',
  BAND = 'Band',
  PLATE = 'Plate',
  TRX = 'TRX',
  BODYWEIGHT = 'Bodyweight',
  YOGA = 'Yoga',
  MACHINE = 'Machine',
}

export enum ExerciseDifficulties {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export enum ExerciseForces {
  PULL = 'Pull',
  PUSH = 'Push',
  HOLD = 'Hold',
}

export enum ExerciseMuscles {
  BICEPS = 'Biceps',
  FOREARMS = 'Forearms',
  SHOULDERS = 'Shoulders',
  TRICEPS = 'Triceps',
  QUADS = 'Quads',
  GLUTES = 'Glutes',
  LATS = 'Lats',
  MID_BACK = 'Mid back',
  LOWER_BACK = 'Lower back',
  HAMSTRINGS = 'Hamstrings',
  CHEST = 'Chest',
  ABDOMINALS = 'Abdominals',
  OBLIQUES = 'Obliques',
  TRAPS = 'Traps',
  CALVES = 'Calves',
}

export interface ExerciseAttributes {
  categories: string[];
  difficulties: string[];
  forces: string[];
  muscles: string[];
}

export interface ExerciseTarget {
  Primary: string[];
  Secondary?: string[];
}

export interface Exercise {
  Category: string;
  Difficulty: string;
  Force: string;
  Grips: string;
  details: string;
  exercise_name: string;
  id: number;
  steps: string[];
  target: ExerciseTarget;
  videoURL: string[];
  youtubeURL: string;
}
