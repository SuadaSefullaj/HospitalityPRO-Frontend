import { Component,Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(public auth: AuthService) {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  showAlert(): void {
    alert("Ju lutem logohuni ne adresen tuaj per te rezervuar!");
  }

  toggleNav(navEl: HTMLElement, hamburgerEl: HTMLElement): void {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
  }
  
}
