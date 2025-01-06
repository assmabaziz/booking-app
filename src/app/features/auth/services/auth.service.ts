import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin } from '../interfaces/ilogin';
import { IRegister } from '../interfaces/iregister';
import { IReset } from '../interfaces/ireset';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (typeof window !== 'undefined') {
      this.getProfile();
    }
  }
  getProfile() {
    if (typeof window !== 'undefined' && window.localStorage) {
      let finalToken: any = localStorage.getItem('userToken');
      let decodedToken: any = jwtDecode(finalToken);
      localStorage.setItem('userRole', decodedToken.role);
      localStorage.setItem('id', decodedToken._id);
      this.setRole();
      return JSON.parse(localStorage.getItem('userToken') || '{}');
    } else {
      return null;
    }
  }
  setRole() {
    if (localStorage.getItem('userToken') && localStorage.getItem('userRole')) {
      this.role = localStorage.getItem('userRole');
      localStorage.getItem('id');
    }
  }

  getProfieDetails(): Observable<any> {
    return this._HttpClient.get(
      `/api/v0/admin/users/${localStorage.getItem('id')}`
    );
  }

  onSignUp(data: any): Observable<any> {
    return this._HttpClient.post<any>('/api/v0/admin/users', data);
  }
  onSignin(data: ILogin): Observable<any> {
    return this._HttpClient.post<ILogin>('/api/v0/admin/users/login', data);
  }
  forgotPassword(email: any) {
    return this._HttpClient.post<any>(
      '/api/v0/portal/users/forgot-password',
      email
    );
  }
  onResetPassword(data: any): Observable<any> {
    return this._HttpClient.post(`/api/v0/portal/users/reset-password`, data);
  }
  onLogout() {
    localStorage.clear();
    this._Router.navigate(['/auth']);
  }
}
