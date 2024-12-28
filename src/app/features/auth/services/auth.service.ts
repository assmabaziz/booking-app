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
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  getProfile() {
    let finalToken: any = localStorage.getItem('userToken');
    let decodedToken: any = jwtDecode(finalToken);
    localStorage.setItem('userRole', decodedToken.role);
    this.setRole();
  }
  setRole() {
    if (localStorage.getItem('userToken') && localStorage.getItem('userRole')) {
      this.role = localStorage.getItem('userRole');
    }
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
