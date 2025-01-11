import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  constructor(private _HttpClient: HttpClient) {}

  getAllFacilities(parms: any): Observable<any> {
    return this._HttpClient.get(`/api/v0/admin/room-facilities`, {
      params: parms,
    });
  }
  addFacility(facility: string): Observable<any> {
    return this._HttpClient.post(`/api/v0/admin/room-facilities/`, facility);
  }
  onDeleteFacility(id: string): Observable<any> {
    return this._HttpClient.delete(`/api/v0/admin/room-facilities/${id}`);
  }
  onEditFacility(id: string, data: any): Observable<any> {
    return this._HttpClient.put(`/api/v0/admin/room-facilities/${id}`, {
      name: data,
    });
  }
}
