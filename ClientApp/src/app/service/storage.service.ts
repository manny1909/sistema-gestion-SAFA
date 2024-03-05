import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage:any
  private session:any
  private usuario: User | undefined
  constructor() {
    this.storage = localStorage
    this.session = sessionStorage
  }
  removeToken() {
    localStorage.removeItem('token')
  }
  setToken(token: string){
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getUser(){
    return this.usuario
  }
  getPayloadJwt(token:string){
    const payload: any = jwtDecode(token)
    return payload || undefined
  }
  setUser(usuario: User) {
    this.usuario = usuario
    this.storage.setItem('user', JSON.stringify(usuario))
  }

}
