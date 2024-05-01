import { TestBed } from '@angular/core/testing';

import { ScreenerService } from './screener.service';

describe('ScreenerService', () => {
  let service: ScreenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
