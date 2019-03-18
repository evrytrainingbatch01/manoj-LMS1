import { TestBed } from '@angular/core/testing';

import { BookInfoService } from './book-info.service';

describe('BookInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookInfoService = TestBed.get(BookInfoService);
    expect(service).toBeTruthy();
  });
});
