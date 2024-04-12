import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/AuthService/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private toast: NgToastService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.toast.error({ detail: "Error", summary: "Ju lutem logohuni ne adresen tuaj!" });
      this.router.navigate(['login']);
      return false;
    }
  }
}
