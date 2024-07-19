import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../../services/workout.service';
import { ViewWorkoutListComponent } from '../view-workout-list/view-workout-list.component';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [
    FormsModule,
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
  workoutService = inject(WorkoutService);
  WorkoutTypes: string[] = this.workoutService.workoutTypes;

  constructor() {}

  ngOnInit(): void {}
}
