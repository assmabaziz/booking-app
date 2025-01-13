import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../interfaces/ibooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient:HttpClient) { }

    onCreateBooking(data:IBooking):Observable<any>{
        return this._HttpClient.post('/api/v0/portal/booking',data)
    }
    onGetBookingDetails(id:string):Observable<any>{
        return this._HttpClient.get(`/api/v0/portal/booking/${id}`)
    }
    onGetAllMyBookings(data:IBooking):Observable<any>{
    return this._HttpClient.post('/api/v0/portal/booking/my',data)
    }
    onPayBooking(id:string,token:string):Observable<any>{
        return this._HttpClient.post(`/api/v0/portal/booking/${id}/pay`,{token:token})
    }
}
