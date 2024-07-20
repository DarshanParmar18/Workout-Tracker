import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../../services/workout.service';
import { ViewWorkoutListComponent } from '../view-workout-list/view-workout-list.component';
import { UserWorkoutData, Workout } from '../../model/User-workout-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    ViewWorkoutListComponent,
  ],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.scss',
})
export class AddWorkoutComponent implements OnInit {
  name = '';
  workouts: Workout[] = [{ type: '', minutes: 0 }];
  minutes = 0;
  id = 3;

  workoutService = inject(WorkoutService);
  WorkoutTypes: string[] = this.workoutService.workoutTypes;

  constructor() {}

  ngOnInit(): void {}

  addWorkoutField() {
    this.workouts.push({ type: '', minutes: 0 });
  }

  removeWorkout(index: number) {
    if (this.workouts.length > 1) {
      this.workouts.splice(index, 1);
    }
  }

  onAddWorkout() {
    const newWorkout: UserWorkoutData = {
      id: ++this.id,
      name: this.name,
      workouts: this.workouts,
    };

    this.workoutService.addWorkout(newWorkout);
  }
}
