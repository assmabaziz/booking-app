import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
role: string|null = ''
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('role') !== null){
      this.getProfile();
    }
   }
   getProfile(){
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded)
    this.getRole()
  }
  getRole(){
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role')) {
      this.role = localStorage.getItem('role')
    }
  }
  onSignUp(data:any):Observable<any>{
    return this._HttpClient.post('portal/users',data)
  }

onSignin(data:any):Observable<any>
 {
  return this._HttpClient.post<any>('portal/users/login', data)
 }
}
