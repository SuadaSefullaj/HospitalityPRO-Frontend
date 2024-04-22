import { TestBed } from '@angular/core/testing';

import { RoomTypeService } from 'src/app/services/RoomTypeService/room-type.service';

describe('RoomTypeService', () => {
  let service: RoomTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
