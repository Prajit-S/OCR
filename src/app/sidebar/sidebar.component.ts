import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService, private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebarVisibility(); // Call the toggleSidebarVisibility method
  }
}
