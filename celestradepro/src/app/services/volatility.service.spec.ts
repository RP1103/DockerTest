import { TestBed } from '@angular/core/testing';

import { VolatilityService } from './volatility.service';

describe('VolatilityService', () => {
  let service: VolatilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolatilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
