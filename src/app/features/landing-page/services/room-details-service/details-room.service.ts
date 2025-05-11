import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsRoomService {
  constructor(private _HttpClient: HttpClient) {}

  getDetailsRoom(id:string): Observable<any> {
    return this._HttpClient.get(
      `/api/v0/portal/rooms/${id}`
    );
  }
  createReview(data: any): Observable<any> {
    return this._HttpClient.post(`/api/v0/portal/room-reviews`, data);
  }

  getReview(id: string): Observable<any> {
    return this._HttpClient.get(`/api/v0/portal/room-reviews/${id}`);
  }

  onBookingRoomWithDate(data: any): Observable<any> {
    return this._HttpClient.post(`/api/v0/portal/booking`, data);
  }
}
