import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutChartAnalysisComponent } from './workout-chart-analysis.component';

describe('WorkoutChartAnalysisComponent', () => {
  let component: WorkoutChartAnalysisComponent;
  let fixture: ComponentFixture<WorkoutChartAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutChartAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutChartAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
