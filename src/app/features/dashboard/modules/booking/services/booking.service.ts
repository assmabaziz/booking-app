import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
constructor(private _HttpClient: HttpClient) {}

  getAllBooking(params: any): Observable<any> {
    return this._HttpClient.get(`/api/v0/admin/booking`, {
      params: params,
    });
  }

}
