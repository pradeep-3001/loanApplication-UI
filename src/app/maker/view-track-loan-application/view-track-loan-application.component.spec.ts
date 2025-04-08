import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackLoanApplicationComponent } from './view-track-loan-application.component';

describe('ViewTrackLoanApplicationComponent', () => {
  let component: ViewTrackLoanApplicationComponent;
  let fixture: ComponentFixture<ViewTrackLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTrackLoanApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrackLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
