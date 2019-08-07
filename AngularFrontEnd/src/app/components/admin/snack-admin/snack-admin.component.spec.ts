import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackAdminComponent } from './snack-admin.component';

describe('SnackAdminComponent', () => {
  let component: SnackAdminComponent;
  let fixture: ComponentFixture<SnackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
