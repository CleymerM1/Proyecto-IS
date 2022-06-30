import { TestBed } from '@angular/core/testing';

import { MujerService } from './mujer.service';

describe('MujerService', () => {
  let service: MujerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MujerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
