import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllAds(parms: any): Observable<any> {
    return this._HttpClient.get(`/api/v0/admin/ads`, {
      params: parms,
    });
  }

  getAllRooms(): Observable<any> {
    let myparms = {
      page: 1,
      size: 1000,
    };
    return this._HttpClient.get(`/api/v0/admin/rooms`, {
      params: myparms,
    });
  }

  onAddAds(data: any): Observable<any> {
    return this._HttpClient.post(`/api/v0/admin/ads`, data);
  }

  onGetAdsById(id: number): Observable<any> {
    return this._HttpClient.get(`/api/v0/admin/ads/${id}`);
  }

  onDeleteAdsById(id: string): Observable<any> {
    return this._HttpClient.delete(`/api/v0/admin/ads/${id}`);
  }
  onUpdateAdsById(id: string, data: any): Observable<any> {
    return this._HttpClient.put(`/api/v0/admin/ads/${id}`, data);
  }
}
