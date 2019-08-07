import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingsComponent } from './servings.component';

describe('ServingsComponent', () => {
  let component: ServingsComponent;
  let fixture: ComponentFixture<ServingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
