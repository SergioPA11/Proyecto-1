import { TestBed } from '@angular/core/testing';

import { AddAlumnoService } from './add-alumno.service';

describe('AddAlumnoService', () => {
  let service: AddAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
