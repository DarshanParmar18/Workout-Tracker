import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutListComponent } from './view-workout-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ViewWorkoutListComponent', () => {
  let component: ViewWorkoutListComponent;
  let fixture: ComponentFixture<ViewWorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ViewWorkoutListComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
