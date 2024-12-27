import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private _HttpClient: HttpClient) {}

  getleftSideChart(): Observable<any> {
    return this._HttpClient.get(
      `https://upskilling-egypt.com:3000/api/v0/admin/dashboard`
    );
  }
}
