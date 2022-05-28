import { TestBed } from '@angular/core/testing';

import { DbInfoService } from './db-info.service';

describe('DbInfoService', () => {
  let service: DbInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
