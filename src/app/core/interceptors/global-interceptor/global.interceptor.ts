import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class globalInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('userToken');
    const baseUrl = 'http://upskilling-egypt.com/3000';
    let newHeaders = {};
    if (userToken ) {
      newHeaders = {
        'Authorization': ` ${userToken}`
      }
    }
    console.log('Original URL:', request.url);
    console.log('Base URL:', baseUrl);
    const modifiedUrl = baseUrl + request.url;
    console.log('Modified URL:', modifiedUrl);
    const newRequest = request.clone({
      setHeaders: newHeaders,
      url: modifiedUrl
    });
    return next.handle(newRequest);
  }
}

