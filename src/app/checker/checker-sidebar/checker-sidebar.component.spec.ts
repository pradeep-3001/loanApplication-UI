import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerSidebarComponent } from './checker-sidebar.component';

describe('CheckerSidebarComponent', () => {
  let component: CheckerSidebarComponent;
  let fixture: ComponentFixture<CheckerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
