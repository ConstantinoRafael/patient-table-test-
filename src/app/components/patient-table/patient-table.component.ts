import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { Patient } from '../patients/patient.model';
import { PatientTableService } from './patient-table.service';

@Component({
  selector: 'app-patient-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './patient-table.component.html',
  styleUrl: './patient-table.component.scss',
})
export class PatientTableComponent implements OnInit {
  patients: Patient[] = [];
  sortCriteria: string = 'name';
  sortAsc: boolean = true;

  constructor(private patientTableService: PatientTableService) {}

  ngOnInit(): void {
    this.getPatientsSortedBy(this.sortCriteria, this.sortAsc);
  }

  getPatientsSortedBy(criteria: string, direction: boolean): void {
    this.patientTableService
      .getPatientsSortedBy(criteria, direction)
      .subscribe((patients) => (this.patients = patients));
  }

  changeSortCriteria(criteria: string): void {
    if (criteria === this.sortCriteria) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortCriteria = criteria;
    }
    this.getPatientsSortedBy(this.sortCriteria, this.sortAsc);
  }
}
