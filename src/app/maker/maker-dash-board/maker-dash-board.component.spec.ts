import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerDashBoardComponent } from './maker-dash-board.component';

describe('MakerDashBoardComponent', () => {
  let component: MakerDashBoardComponent;
  let fixture: ComponentFixture<MakerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakerDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
