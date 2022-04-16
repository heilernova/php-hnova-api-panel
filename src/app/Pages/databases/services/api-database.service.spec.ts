import { TestBed } from '@angular/core/testing';

import { ApiDatabaseService } from './api-database.service';

describe('ApiDatabaseService', () => {
  let service: ApiDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
