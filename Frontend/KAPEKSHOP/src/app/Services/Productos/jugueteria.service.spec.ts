import { TestBed } from '@angular/core/testing';

import { JugueteriaService } from './jugueteria.service';

describe('JugueteriaService', () => {
  let service: JugueteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugueteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
