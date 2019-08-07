import { TestBed } from '@angular/core/testing';

import { ConcessionService } from './concession.service';

describe('ConcessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcessionService = TestBed.get(ConcessionService);
    expect(service).toBeTruthy();
  });
});
