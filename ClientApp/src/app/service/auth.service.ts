import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { User } from '../interfaces/User';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Subject<User> = new Subject<User>();
  public user$: Observable<User> = this.user.asObservable();

  constructor(private _http: HttpClient, private _storageService: StorageService, private _router: Router) {
  }
  registrarse(user: any): Observable<any> {
    return this._http.post(environment.apiURL+'auth/signUp',{user})
  }
  login(loginForm: { email: string, pass: string }): Observable<any> {
    return this._http.post<any>(environment.apiURL + 'auth/signIn/', loginForm).pipe(
      tap((response) => {
        if (response.token) {
          this._storageService.setToken(response.token)
        }
        if(response.roles && response.roles instanceof Array){
          const roles: Array<string> = response.roles.map((x:any)=> x.name)
          const _route = roles.findIndex(x=>x =='Administrador')!=-1 ? 'admin' : 'user'
           this._router.navigate([_route])
        }
      }),
      catchError(this.handleError<User>('login'))
    );
  }
  logout(): Observable<undefined> {
    return this._http.get<any>(environment.apiURL + 'auth/logout/').pipe(
      tap(() => {
        this._storageService.removeToken()
        this._router.navigate(['login'])
      })
    )
  }
  getUserByToken(): Observable<any> {
    return this._http.post<any>(environment.apiURL + 'auth/getUserByToken', {}).pipe(
      tap((response) => {
        const user: User = response.user;
        if (user) {
          this.user.next(user);
        } else {
          console.error('getUserByToken: No se obtuvo un usuario');
        }
      }),
      catchError(this.handleError<User>('getUserByToken'))
    );
  }
  handleNoAuthRoutes(): Observable<boolean> {
    const token = this._storageService.getToken();

    if (!token) {
      // No hay token, permitir el acceso
      return of(true);
    }
    return this.user$.pipe(
      take(1),
      tap((user) => {
        let route = 'user'
        const isAdmin = user.roles.findIndex((r) => r.name === 'Administrador');
        if (isAdmin !== -1) {
          route = 'admin'
        }
        this._router.navigate([route])
      }),
      map(user => false),
    );
  }
  isAuthenticated(): boolean | Observable<boolean> | Promise<boolean> {
    const token = this._storageService.getToken()
    if (!token) {
      return this._router.navigate(['/login'])
    }
    return this.user$.pipe(
      take(1),
      map(user => {
        if (user) {
          console.log('asdasd')
          return true
        }
        else {

          return false
        }
      }),
      catchError(this.handleError<boolean>('isAuthenticated'))
    );
  }

  initialize(): void {
    console.log('Inicializando AuthService');
    const _token = this._storageService.getToken();
    if (_token) {
      this.getUserByToken().subscribe();
    }
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
