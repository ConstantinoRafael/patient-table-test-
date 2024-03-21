import { TestBed } from '@angular/core/testing';

import { PatientTableService } from './patient-table.service';

describe('PatientTableService', () => {
  let service: PatientTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
