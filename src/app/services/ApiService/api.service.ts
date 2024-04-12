import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7006/api/Client/';
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<any>(this.baseUrl);
  }
}