import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private _HttpClient: HttpClient) {}
  onGetAllRooms(data: any): Observable<any> {
    return this._HttpClient.get('/api/v0/admin/rooms', { params: data });
  }
  onAddRoom(data: any): Observable<any> {
    return this._HttpClient.post('/api/v0/admin/rooms', data);
  }
  onGetFacilities(): Observable<any> {
    return this._HttpClient.get('/api/v0/admin/room-facilities');
  }
  onDeleteRoomById(id: any): Observable<any> {
    return this._HttpClient.delete(`/api/v0/admin/rooms/${id}`);
  }
  onEditRoom( data: any, id : string ): Observable<any> {
    return this._HttpClient.put(`/api/v0/admin/rooms/${id}`, data);
  }
  onGetRoomById(id:string): Observable<any>  {
    return this._HttpClient.get(`/api/v0/admin/rooms/${id}`);
  }
}
