import { TestBed } from '@angular/core/testing';

import { CrossrateService } from './crossrate.service';

describe('CrossrateService', () => {
  let service: CrossrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
