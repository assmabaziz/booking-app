import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

constructor(private _HttpClient:HttpClient) {}
getAllUsers():Observable<any>{
  return this._HttpClient.get('https://upskilling-egypt.com:3000/api/v0/admin/users?page=1&size=10')
}
}
