import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceUserComponent } from './conce-user.component';

describe('ConceUserComponent', () => {
  let component: ConceUserComponent;
  let fixture: ComponentFixture<ConceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
