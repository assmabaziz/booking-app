import { IRoom } from './../../rooms/interfaces/iroom';
import {
  IadsAddEdit,
  IadsDelete,
  IApiRespose,
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

  getAllAds(parms: any): Observable<IApiRespose<IAds>> {
    return this._HttpClient.get<IApiRespose<IAds>>(`/api/v0/admin/ads`, {
      params: parms,
    });
  }

  getAllRooms(): Observable<IApiRespose<IRoom>> {
    let myparms = {
      page: 1,
      size: 1000,
    };
    return this._HttpClient.get<IApiRespose<IRoom>>(`/api/v0/admin/rooms`, {
      params: myparms,
    });
  }

  onAddAds(data: any): Observable<IApiRespose<IadsAddEdit>> {
    return this._HttpClient.post<IApiRespose<IadsAddEdit>>(
      `/api/v0/admin/ads`,
      data
    );
  }

  onDeleteAdsById(id: string): Observable<IApiRespose<IadsDelete>> {
    return this._HttpClient.delete<IApiRespose<IadsDelete>>(
      `/api/v0/admin/ads/${id}`
    );
  }
  onUpdateAdsById(id: string, data: any): Observable<IApiRespose<IadsAddEdit>> {
    return this._HttpClient.put<IApiRespose<IadsAddEdit>>(
      `/api/v0/admin/ads/${id}`,
      data
    );
  }
}
