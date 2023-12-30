import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage:any
  private sesion:any
  private usuario: User | undefined
  constructor(private _loginServ: LoginService, private _http: HttpClient) {
    this.storage = localStorage
    this.sesion = sessionStorage
    _loginServ.getToken$().subscribe((token: string) => {
      if (token && token!='') {
        this.storage.setItem('token', token)
      }
      else if (this.storage.getItem('user')) {
        this.storage.removeItem('user')
      }
    })
    const tokenStorage = sessionStorage.getItem('token')
    
    tokenStorage&&this._loginServ.setToken(tokenStorage)
    
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getUser(){
    return this.usuario
  }
  setUser(usuario: User) {
    this.usuario = usuario
    this.storage.setItem('user', JSON.stringify(usuario))
  }
  getUserStorage(): Observable<any> {
    return this._http.post(environment.apiURL + 'user/getUserByToken', {})
  }
}
