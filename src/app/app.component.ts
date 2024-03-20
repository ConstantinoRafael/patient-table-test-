import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'patient-table';
}
