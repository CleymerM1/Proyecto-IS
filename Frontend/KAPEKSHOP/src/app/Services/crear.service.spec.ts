import { TestBed } from '@angular/core/testing';

import { crearService } from './crear.service';

describe('CrearService', () => {
  let service: crearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(crearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
