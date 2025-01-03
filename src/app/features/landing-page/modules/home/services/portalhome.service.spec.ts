import { TestBed } from '@angular/core/testing';

import { PortalhomeService } from '../services/portalhome.service';

describe('PortalhomeService', () => {
  let service: PortalhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
