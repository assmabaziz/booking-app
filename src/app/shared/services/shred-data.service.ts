import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IChangePassword } from '../../features/dashboard/modules/users-admin/interfaces/IusersAdmin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShredDataService {

  constructor(private _HttpClient : HttpClient) { }
  public myData = signal<any>('');

  setData(newData: any) {
    this.myData.set(newData);
  }
changePassword(data:IChangePassword) : Observable<any> {
return this._HttpClient.post('/api/v0/admin/users/change-password', data)
}
}
