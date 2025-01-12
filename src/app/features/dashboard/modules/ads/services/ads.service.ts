import { IRoom } from './../../rooms/interfaces/iroom';
import {
  IadsAddEdit,
  IadsDelete,
} from './../../../../../shared/interfaces/iapi-respose';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAds } from '../interfaces/iads';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllAds(parms: any): Observable<any> {
    return this._HttpClient.get<any>(`/api/v0/admin/ads`, {
      params: parms,
    });
  }

  getAllRooms(): Observable<any> {
    let myparms = {
      page: 1,
      size: 1000,
    };
    return this._HttpClient.get<any>(`/api/v0/admin/rooms`, {
      params: myparms,
    });
  }

  onAddAds(data: any): Observable<any> {
    return this._HttpClient.post<any>(`/api/v0/admin/ads`, data);
  }

  onDeleteAdsById(id: string): Observable<any> {
    return this._HttpClient.delete<any>(`/api/v0/admin/ads/${id}`);
  }
  onUpdateAdsById(id: string, data: any): Observable<any> {
    return this._HttpClient.put<any>(`/api/v0/admin/ads/${id}`, data);
  }
}
