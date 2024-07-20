import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { ViewWorkoutListComponent } from './components/view-workout-list/view-workout-list.component';
// import { WorkoutChartAnalysisComponent } from './components/workout-chart-analysis/workout-chart-analysis.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/addWorkout',
    pathMatch: 'full',
  },
  {
    path: 'addWorkout',
    component: AddWorkoutComponent,
  },
  {
    path: 'viewWorkout',
    component: ViewWorkoutListComponent,
  },
  // {
  //   path: 'viewChart',
  //   component: WorkoutChartAnalysisComponent,
  // },
];
