import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class globalInterceptor implements HttpInterceptor {
  private baseUrl = 'http://upskilling-egypt.com/3000'; // Replace with your actual base URL

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      url: `${this.baseUrl}${request.url}`
    });

    return next.handle(modifiedRequest);
  }
}
