import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortalhomeService {
  constructor(private _HttpClient: HttpClient) {}

  getAllAds(): Observable<any> {
    return this._HttpClient.get(`/api/v0/portal/ads`);
  }
}
