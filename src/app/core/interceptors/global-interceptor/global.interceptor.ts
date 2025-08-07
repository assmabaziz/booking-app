import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../../../shared/services/helper.service';

@Injectable({
  providedIn: 'root',
})

export class globalInterceptor implements HttpInterceptor {
  private baseUrl = 'https://upskilling-egypt.com:3000';
  newRequest: HttpRequest<unknown> | undefined;
  const helperService = inject(HelperService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (helperService.isPlatformBrowser()) {
      if (localStorage.getItem('userToken')) {
        this.newRequest = request.clone({
          url: request.url.includes('assets')
            ? `${request.url}`
            : this.baseUrl + request.url,
          setHeaders: {
            Authorization: `${localStorage.getItem('userToken')}`,
          },
        });
      } else {
        this.newRequest = request.clone({
          url: request.url.includes('assets')
            ? `${request.url}`
            : this.baseUrl + request.url,
        });
      }
      return next.handle(this.newRequest);
    } else {
      this.newRequest = request.clone({
        url: request.url.includes('assets')
          ? `${request.url}`
          : this.baseUrl + request.url,
      });
      return next.handle(this.newRequest);
    }
  }
}
