import { Component } from '@angular/core';

@Component({
  selector: 'user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent {
  isDropdownOpen: boolean = false; // Added property to track dropdown state

  constructor() {}

  toggleUserDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown state
  }
}
