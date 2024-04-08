import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  toggleNav(navEl: HTMLElement, hamburgerEl: HTMLElement): void {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
  }
}
