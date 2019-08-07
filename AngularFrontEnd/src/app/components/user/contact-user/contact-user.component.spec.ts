import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUserComponent } from './contact-user.component';

describe('ContactUserComponent', () => {
  let component: ContactUserComponent;
  let fixture: ComponentFixture<ContactUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
