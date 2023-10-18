import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarVisible: boolean = false; // Define and initialize the property

  toggleSidebarVisibility() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
