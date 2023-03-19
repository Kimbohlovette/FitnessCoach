export interface Workout {
  title: string;
  exercises: string[];
  duration: number;
  postRestTime: number;
  description: string;
}

export interface InitialState {
  workouts: Workout[];
  currentWorkout: Workout | null;
  status: 'idle' | 'progress' | 'paused' | 'ready';
}
