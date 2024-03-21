import { Injectable } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { PATIENTS } from '../patients/mock-patients';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientTableService {
  getPatients(): Observable<Patient[]> {
    const patients = of(PATIENTS);

    return patients;
  }

  getPatientsSortedBy(
    criteria: string,
    direction: boolean
  ): Observable<Patient[]> {
    return this.getPatients().pipe(
      map((patients) => {
        let sortedPatients = patients.slice();
        switch (criteria) {
          case 'name':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          case 'status':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.status.localeCompare(b.status)
            );
            break;
          case 'diagnosis':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.diagnosis.localeCompare(b.diagnosis)
            );
            break;
          case 'medicine':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.medicine.localeCompare(b.medicine)
            );
            break;
          case 'health-insurance':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.medicine.localeCompare(b.medicine)
            );
            break;
          case 'last-request':
            sortedPatients = sortedPatients.sort((a, b) =>
              a.medicine.localeCompare(b.medicine)
            );
            break;
        }
        if (!direction) {
          sortedPatients.reverse();
        }
        return sortedPatients;
      })
    );
  }

  constructor() {}
}
