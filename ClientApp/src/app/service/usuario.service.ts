import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  addUser(user: { discord: string; email: string; name: string; roles: any[]; }):Observable<any> {
    return this._http.post<any>(environment.apiURL+'user/create', user)
  }
  getUsers():Observable<any> {
    return this._http.post(environment.apiURL+'user/getUsers',{})
  }


  constructor(private _http:HttpClient) { }
}
