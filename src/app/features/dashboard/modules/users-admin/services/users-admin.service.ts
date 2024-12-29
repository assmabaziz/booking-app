import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iparams } from '../interfaces/Iparams';
import { IusersAdmin } from '../interfaces/IusersAdmin';

@Injectable({
  providedIn: 'root',
})
export class UsersAdminService {
  constructor(private _HttpClient: HttpClient) {}

  getAllUser(params: any): Observable<any> {
    return this._HttpClient.get(`/api/v0/admin/users`, {
      params: params,
    });
  }
}
