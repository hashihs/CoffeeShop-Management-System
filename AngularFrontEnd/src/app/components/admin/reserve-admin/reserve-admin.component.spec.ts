import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveAdminComponent } from './reserve-admin.component';

describe('ReserveAdminComponent', () => {
  let component: ReserveAdminComponent;
  let fixture: ComponentFixture<ReserveAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
