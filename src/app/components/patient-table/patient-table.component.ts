import { Component } from '@angular/core';
import { PATIENTS } from '../patients/mock-patients';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-patient-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './patient-table.component.html',
  styleUrl: './patient-table.component.scss',
})
export class PatientTableComponent {
  patients = PATIENTS;
}
