import { TestBed } from '@angular/core/testing';

import { VixService } from './vix.service';

describe('VixService', () => {
  let service: VixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
