import { TestBed } from '@angular/core/testing';

import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should initialize with data', () => {
    localStorage.clear();
    service = new WorkoutService();
    expect(service.getUserData().length).toBe(3);
  });

  it('should add a workout', () => {
    const newWorkout = {
      userName: 'Test User',
      workoutType: 'Running',
      minutes: 30,
    };
    service.addWorkout(newWorkout);
    expect(service.getUserData().length).toBe(4);
  });
});
