import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplayForLoanComponent } from './applay-for-loan.component';

describe('ApplayForLoanComponent', () => {
  let component: ApplayForLoanComponent;
  let fixture: ComponentFixture<ApplayForLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplayForLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplayForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
