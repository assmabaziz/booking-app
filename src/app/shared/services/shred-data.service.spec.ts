import { TestBed } from '@angular/core/testing';

import { ShredDataService } from './shred-data.service';

describe('ShredDataService', () => {
  let service: ShredDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShredDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
