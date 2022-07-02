import { TestBed } from '@angular/core/testing';

import { HombreService } from './hombre.service';

describe('HombreService', () => {
  let service: HombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
