import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/helpers/handleError'; 
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7006/api/Auth/"
  private userPayload:any;

  constructor(private http: HttpClient,private router:Router) { 
    this.userPayload = this.decodedToken();
    console.log('User Payload:', this.userPayload);
  }

  signUp(clientObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, clientObj)
    .pipe(
      catchError(handleError) 
    );
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}login`, loginObj)
      .pipe(
        catchError(handleError)
      );
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
    console.log("Token stored in local storage:", tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const tokenResponse = localStorage.getItem('token')!;
    console.log(jwtHelper.decodeToken(tokenResponse))
    return jwtHelper.decodeToken(tokenResponse);
  }
  
  getNameFromToken() {
    if (this.userPayload) {
      console.log('Name from token:', this.userPayload.name);
      return this.userPayload.name;
    }
  }
  
  getRoleFromToken() {
    if (this.userPayload) {
      console.log('Role from token:', this.userPayload.role);
      return this.userPayload.role;
    }
  }
  
}
