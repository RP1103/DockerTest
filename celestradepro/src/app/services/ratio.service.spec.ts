import { TestBed } from '@angular/core/testing';

import { RatioService } from './ratio.service';

describe('RatioService', () => {
  let service: RatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
