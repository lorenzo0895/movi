import { TestBed } from '@angular/core/testing';

import { CuandoLlegaService } from './cuando-llega.service';

describe('CuandoLlegaService', () => {
  let service: CuandoLlegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuandoLlegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
