import { Injectable } from '@angular/core';
import { UserWorkoutData } from '../model/User-workout-data.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Weight Lifting'];

  constructor() {
    if (this.isLocalStorageAvailable() && !localStorage.getItem('userData')) {
      this.initialData();
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
    localStorage?.setItem('userData', JSON.stringify(initialUserData));
  }

  getUserData(): UserWorkoutData[] {
    return JSON.parse(localStorage?.getItem('userData') || '[]');
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
