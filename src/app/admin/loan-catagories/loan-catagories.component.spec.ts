import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCatagoriesComponent } from './loan-catagories.component';

describe('LoanCatagoriesComponent', () => {
  let component: LoanCatagoriesComponent;
  let fixture: ComponentFixture<LoanCatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanCatagoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
