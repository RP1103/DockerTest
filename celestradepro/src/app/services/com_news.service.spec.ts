import { TestBed } from '@angular/core/testing';

import { Com_newsService } from './com_news.service';

describe('Com_newsService', () => {
  let service: Com_newsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Com_newsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
