import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveUserComponent } from './reserve-user.component';

describe('ReserveUserComponent', () => {
  let component: ReserveUserComponent;
  let fixture: ComponentFixture<ReserveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
