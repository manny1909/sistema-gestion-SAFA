import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage:any
  private sesion:any
  private usuario: Usuario | undefined
  constructor(private _loginServ: LoginService, private _http: HttpClient) {
    this.storage = localStorage
    this.sesion = sessionStorage
    _loginServ.getToken$().subscribe((token: string) => {
      if (token && token!='') {
        this.sesion.setItem('token', token)
        this.getUserStorage(token)?.subscribe((response:{user:any, roles:any, miembros:any}) => {
          const {user, miembros,roles} = response
          this.setUser(user)
        })
      }
      else if (this.storage.getItem('user')) {
        this.storage.removeItem('user')
      }
    })
    const tokenStorage = sessionStorage.getItem('token')
    
    tokenStorage&&this._loginServ.setToken(tokenStorage)
    
  }
  getUser(){
    return this.usuario
  }
  setUser(usuario: Usuario) {
    this.usuario = usuario
    this.storage.setItem('user', JSON.stringify(usuario))
  }
  getUserStorage(token:string): Observable<any> | undefined {
    return this._http.post(environment.apiURL + 'users/getUserByToken', {token})
  }
}
