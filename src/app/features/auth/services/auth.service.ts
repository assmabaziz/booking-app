import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    // if(localStorage.getItem('userToken') ){
    //   this.getProfile();
    // }
  }
  getProfile() {
    let finalToken: any = localStorage.getItem('userToken');
    let decodedToken: any = jwtDecode(finalToken);
    localStorage.setItem('userName', decodedToken.userName);
    localStorage.setItem('userGroup', decodedToken.userGroup);
    this.setRole();
  }
  setRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }
  onSignUp(data:any):Observable<any>{
    return this._HttpClient.post('/api/v0/admin/users',data)
  onSignin(data: any): Observable<any> {
    return this._HttpClient.post<any>('/api/v0/admin/users/login', data);
  }

  onLogout() {
    localStorage.clear();
    this._Router.navigate(['/auth']);
  }
}
