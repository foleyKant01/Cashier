import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './include/sidebar/sidebar.component';

@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss'
})
export class SuperadminComponent {

}
