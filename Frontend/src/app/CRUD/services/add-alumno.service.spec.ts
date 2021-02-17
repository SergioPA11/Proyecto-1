import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AddAlumnoService } from './add-alumno.service';

describe('AddAlumnoService', () => {
  let service: AddAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    }); 
    service = TestBed.inject(AddAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
