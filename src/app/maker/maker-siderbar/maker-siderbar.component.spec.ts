import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerSiderbarComponent } from './maker-siderbar.component';

describe('MakerSiderbarComponent', () => {
  let component: MakerSiderbarComponent;
  let fixture: ComponentFixture<MakerSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakerSiderbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakerSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
