import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomType } from 'src/app/models/room-type';


@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  private baseUrl = 'https://localhost:7006/api/RoomType/';

  constructor(private http: HttpClient) { }

  getAllRoomTypes(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.baseUrl}getAllRoomTypes`);
  }

  getRoomTypeById(id: number): Observable<RoomType> {
    return this.http.get<RoomType>(`${this.baseUrl}${id}`);
  }
}
