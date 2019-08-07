import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingsUserComponent } from './servings-user.component';

describe('ServingsUserComponent', () => {
  let component: ServingsUserComponent;
  let fixture: ComponentFixture<ServingsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServingsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
