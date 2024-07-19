export interface Workout {
  type: string;
  minutes: number;
}

export interface UserWorkoutData {
  id: number;
  name: string;
  workouts: Workout[];
}
