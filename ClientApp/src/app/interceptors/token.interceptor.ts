import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StorageService } from '../service/storage.service';
import { catchError, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _storageService: StorageService, private _router:Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._storageService.getToken()
    if (!token) {
      return next.handle(request).pipe(
        catchError(err=>this.errorOnRequestHandler(err, request)),
        retry(0)
      );
    }
    const reqClone = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(reqClone).pipe(
      catchError(err=>this.errorOnRequestHandler(err, reqClone)),
      retry(0)
    );
  }
  errorOnRequestHandler(err:any, request:HttpRequest<unknown>){
      let errorMessage = ''
      if (err instanceof HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${err.error.message}`
        } else {
          this.switchStatusResponseActions(err, request)
        }
      }
      return throwError(errorMessage)
  }
  switchStatusResponseActions(error: any, req: HttpRequest<any>): void {
    switch (error.status) {
      case 401:
        // swal({
        //   type: 'warning',
        //   title: 'Usuario no autorizado',
        //   html:
        //     'Este usuario no esta autorizado o no tiene permisos para realizar la acción',
        //   timer: 5000,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   allowOutsideClick: false,
        //   showConfirmButton: false,
        //   onClose: () => {
        //   },
        // })
        this._storageService.removeToken()
        this._router.navigate(['login'])
        break
      case 403:
        // swal({
        //   type: 'warning',
        //   title: 'Usuario no autorizado',
        //   html:
        //     'Este usuario no esta autorizado o no tiene permisos para realizar la acción',
        //   timer: 5000,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   allowOutsideClick: false,
        //   showConfirmButton: false,
        //   onClose: () => {
        //   },
        // })
        break
      case 406:
        // swal({
        //   type: 'error',
        //   title: 'Usuario no autorizado',
        //   html:
        //     'Este usuario no esta autorizado o no tiene permisos para realizar la acción',
        //   timer: 5000,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   allowOutsideClick: false,
        //   showConfirmButton: false,
        // })
        break
      case 429: {

        break
      }
      case 500: {
        // swal({
        //   type: 'error',
        //   title: 'Ups algo salió mal',
        //   text: 'Inténtalo de nuevo más tarde',
        //   timer: 5000,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   allowOutsideClick: false,
        //   showConfirmButton: false,
        // })
        break
      }
    }
  }
}
