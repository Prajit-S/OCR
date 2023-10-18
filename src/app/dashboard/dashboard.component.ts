import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebarVisibility();
  }
}
