import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iparams } from '../interfaces/Iparams';
import { IusersAdmin } from '../interfaces/IusersAdmin';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

constructor(private _HttpClient:HttpClient) {}
getAllUsers(params:Iparams):Observable<IusersAdmin>{
  return this._HttpClient.get<IusersAdmin>('/api/v0/admin/users',{
    params: {
      page: params?.page || 1,
      size: params?.size || 10,
    }
  })
}
}
