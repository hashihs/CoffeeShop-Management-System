import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceAdminComponent } from './conce-admin.component';

describe('ConceAdminComponent', () => {
  let component: ConceAdminComponent;
  let fixture: ComponentFixture<ConceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
