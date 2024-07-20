import { Injectable } from '@angular/core';
import { UserWorkoutData, Workout } from '../model/User-workout-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  localStorageKey = 'userData';
  private workoutsSubject = new BehaviorSubject<UserWorkoutData[]>(this.getUserData());
  workouts$ = this.workoutsSubject.asObservable();

  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Weight Lifting'];

  constructor() {
    if (
      this.isLocalStorageAvailable() &&
      !localStorage.getItem(this.localStorageKey)
    ) {
      this.initialData();
      this.workoutsSubject.next(this.getUserData());
    }
    // else {
    //   console.log('localStorage is not available');
    // }
  }

  initialData() {
    const initialUserData: UserWorkoutData[] = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 },
        ],
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 },
          { type: 'Running', minutes: 20 },
        ],
      },
    ];
    localStorage?.setItem(
      this.localStorageKey,
      JSON.stringify(initialUserData)
    );
  }

  getUserData(): UserWorkoutData[] {
    return JSON.parse(localStorage?.getItem(this.localStorageKey) || '[]');
  }

  addWorkout(newWorkout: UserWorkoutData) {
    const workout = this.getUserData();
    workout.push(newWorkout);
    this.workoutsSubject.next(workout);
    localStorage?.setItem(this.localStorageKey, JSON.stringify(workout));
  }

  isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
