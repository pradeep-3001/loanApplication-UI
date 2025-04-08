import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLoanApplicationsComponent } from './pending-loan-applications.component';

describe('PendingLoanApplicationsComponent', () => {
  let component: PendingLoanApplicationsComponent;
  let fixture: ComponentFixture<PendingLoanApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingLoanApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingLoanApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
