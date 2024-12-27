import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class globalInterceptor  {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('userToken');
    const baseUrl = 'http://upskilling-egypt.com/3000';
    let newHeaders = {};
    if (userToken ) {
      newHeaders = {
        'Authorization': ` ${userToken}`
      }
    }
    let newRequest = request.clone({
      setHeaders: newHeaders, url: request.url.includes('assets') ? request.url : baseUrl + request.url
    })
    return next.handle(newRequest);

  }
}
