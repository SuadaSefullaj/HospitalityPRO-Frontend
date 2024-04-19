import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7006/api/Client/';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getAllClients() {

    const token = this.auth.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, 
    });

    return this.http.get<any>(this.baseUrl, { headers });
  }
}
