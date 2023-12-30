import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:string =''
  token$:Subject<string> = new Subject<string>()
  constructor(private _http:HttpClient) {
    
  }
  login(loginForm:{email:string, pass:string}):Observable<any>{
    return this._http.post(environment.apiURL+'user/signIn/',loginForm)
  }
  setToken(token:string){
    this.token=token
    this.token$.next(token)
  }
  getToken():string{
    return  this.token
  }
  getToken$():Observable<string>{
    return this.token$.asObservable()
  }
}
