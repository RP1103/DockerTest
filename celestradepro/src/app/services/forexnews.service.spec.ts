import { TestBed } from '@angular/core/testing';

import { ForexnewsService } from './forexnews.service';

describe('ForexnewsService', () => {
  let service: ForexnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
