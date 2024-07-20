import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../../services/workout.service';
import { UserWorkoutData, Workout } from '../../model/User-workout-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-workout-list',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatSortModule,
    MatSort,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './view-workout-list.component.html',
  styleUrl: './view-workout-list.component.scss',
})
export class ViewWorkoutListComponent implements OnInit, AfterViewInit {
  workoutService = inject(WorkoutService);
  WorkoutTypes = [
    'All',
    'Running',
    'Swimming',
    'Cycling',
    'Yoga',
    'Weight Traning',
  ];

  displayedColumns: string[] = [
    'name',
    'Workouts',
    'noOfWorkouts',
    'totalWorkoutMinutes',
  ];
  dataSource!: MatTableDataSource<UserWorkoutData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    if (this.workoutService.isLocalStorageAvailable()) {
      let users: UserWorkoutData[];
      this.workoutService.workouts$.subscribe((workout) => {
        users = workout;
        this.dataSource = new MatTableDataSource(users);
      });
    }

    this.dataSource.filterPredicate = (
      data: UserWorkoutData,
      filter: string
    ) => {
      if (filter === 'all') {
        return true;
      }
      const nameMatch = data.name?.toLowerCase().includes(filter);
      const typeMatch = data.workouts?.some((workout) =>
        workout.type.toLowerCase().includes(filter)
      );
      return nameMatch || typeMatch;
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilterOnKey(event: any) {
    const filterValue = (event.target as HTMLInputElement)?.value;
    console.log(this.dataSource.data);
    this.filter(filterValue);
  }

  applyFilter(event: any) {
    const filterValue = event?.value;
    console.log(this.dataSource);
    if (filterValue === 'All') {
      this.dataSource.filter = '';
    } else {
      this.filter(filterValue);
    }
  }

  private filter(filterValue: any) {
    this.dataSource.filter = filterValue?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTotalMinutes(workouts: Workout[]) {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserWorkoutData {
//   // const name =
//   //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//   //   ' ' +
//   //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//   //   '.';

//   return {
//     id:id,
//     name: name,
//     workouts:
//     // progress: Math.round(Math.random() * 100).toString(),
//     // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
