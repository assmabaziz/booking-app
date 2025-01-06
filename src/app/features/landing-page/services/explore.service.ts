import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private _HttpClient: HttpClient) { }
  onGetAllRooms(params: any): Observable<any> {
    return this._HttpClient.get('/api/v0/portal/rooms/available', { params: params });
  }
}
