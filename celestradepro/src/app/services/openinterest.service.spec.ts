import { TestBed } from '@angular/core/testing';

import { OpeninterestService } from './openinterest.service';

describe('OpeninterestService', () => {
  let service: OpeninterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeninterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});