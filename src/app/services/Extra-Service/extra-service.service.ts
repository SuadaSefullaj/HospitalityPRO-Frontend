import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtraService } from 'src/app/models/extra-service';

@Injectable({
  providedIn: 'root'
})
export class ExtraServiceService {
  private baseUrl = 'https://localhost:7006/api/ExtraService/';

  constructor(private http: HttpClient) { }

  getAllExtraService(): Observable<ExtraService[]> {
    return this.http.get<ExtraService[]>(`${this.baseUrl}getAllExtraService`);
  }

  getExtraServiceById(id: number): Observable<ExtraService> {
    return this.http.get<ExtraService>(`${this.baseUrl}${id}`);
  }
}
