import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/helpers/handleError'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7006/api/Auth/"

  constructor(private http: HttpClient) { }

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
}
