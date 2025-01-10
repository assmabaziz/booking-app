import { TestBed } from '@angular/core/testing';

import { DetailsRoomService } from './details-room.service';

describe('DetailsRoomService', () => {
  let service: DetailsRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
