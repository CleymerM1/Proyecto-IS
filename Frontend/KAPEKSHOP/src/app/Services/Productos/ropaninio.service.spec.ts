import { TestBed } from '@angular/core/testing';

import { RopaNinioService } from './ropaninio.service';

describe('RopaNinioService', () => {
  let service: RopaNinioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopaNinioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
