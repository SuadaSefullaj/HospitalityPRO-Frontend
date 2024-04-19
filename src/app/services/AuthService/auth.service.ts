import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/helpers/handleError'; 
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApiModel } from 'src/app/models/token-api.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7006/api/Auth/"
  private userPayload:any;

  constructor(private http: HttpClient,private router:Router) { 
    this.userPayload = this.decodedToken();
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
    this.userPayload = null; 
    this.router.navigate(['login']);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
    console.log("Token stored in local storage:", tokenValue);
  }
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue);
    console.log("Refresh Token stored in local storage:", tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getRefreshToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const tokenResponse = this.getToken()!;
    const decodedToken = jwtHelper.decodeToken(tokenResponse);
    this.userPayload = decodedToken; 
    return decodedToken;
  
  }
  
  getNameFromToken() {
    if (this.userPayload) {
      return this.userPayload.name;
    }
  }
  
  getRoleFromToken() {
    if (this.userPayload) {
      console.log('Role from token:', this.userPayload.role);
      return this.userPayload.role;
    }
  }

  refreshToken(token : any){
    return this.http.post<any>(`${this.baseUrl}refresh-token`, token)
  }
  
}
