import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  getUsers():Observable<any> {
    return this._http.post(environment.apiURL+'users/getUsers',{})
  }
  registrarse(user: any): Observable<any> {
    return this._http.post(environment.apiURL+'users/signUp',{user})
  }

  constructor(private _http:HttpClient) { }
}
