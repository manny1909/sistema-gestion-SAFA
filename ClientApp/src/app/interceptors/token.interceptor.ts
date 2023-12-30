import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _storageService:StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._storageService.getToken()
    if (!token) {
      return next.handle(request);
    }
    const reqClone = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(reqClone);
  }
}
