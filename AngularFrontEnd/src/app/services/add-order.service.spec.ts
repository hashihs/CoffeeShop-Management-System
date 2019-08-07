import { TestBed } from '@angular/core/testing';

import { AddOrderService } from './add-order.service';

describe('AddOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddOrderService = TestBed.get(AddOrderService);
    expect(service).toBeTruthy();
  });
});
