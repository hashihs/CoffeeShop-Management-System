import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUserComponent } from './cart-user.component';

describe('CartUserComponent', () => {
  let component: CartUserComponent;
  let fixture: ComponentFixture<CartUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
