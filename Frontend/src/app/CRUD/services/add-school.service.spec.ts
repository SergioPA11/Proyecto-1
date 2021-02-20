import { TestBed } from '@angular/core/testing';

import { AddSchoolService } from './add-school.service';

describe('AddSchoolService', () => {
  let service: AddSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
