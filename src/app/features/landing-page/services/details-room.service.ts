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
      `/api/v0/portal/rooms/677e4217c01e1856618de9b1`
    );
  }
}
