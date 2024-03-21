import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { MenuDropdownComponent } from '../menu-dropdown/menu-dropdown.component';
import { PatientTableComponent } from '../patient-table/patient-table.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [SidebarComponent, MenuDropdownComponent, PatientTableComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {}
