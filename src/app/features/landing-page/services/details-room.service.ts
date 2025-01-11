import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsRoomService {
  constructor(private _HttpClient: HttpClient) {}

  getDetailsRoom(): Observable<any> {
    return this._HttpClient.get(
      `/api/v0/portal/rooms/66f9e0fc6475e2d50da9d89f`
    );
  }
}
