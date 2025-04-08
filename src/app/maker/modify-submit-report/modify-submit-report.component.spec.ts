import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySubmitReportComponent } from './modify-submit-report.component';

describe('ModifySubmitReportComponent', () => {
  let component: ModifySubmitReportComponent;
  let fixture: ComponentFixture<ModifySubmitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySubmitReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySubmitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
