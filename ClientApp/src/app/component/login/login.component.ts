import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup = this._fb.group({})
  constructor(private _fb:FormBuilder, 
    private _loginServ:LoginService,
    private _router:Router) { 
    this.buildForms();
  }

  buildForms(){
    this.formLogin = this._fb.group({
      email:['', Validators.compose([Validators.email, Validators.required])],
      password:['', Validators.compose([Validators.pattern(''), Validators.required])]
    })
  }
  enviar(){
    const form = this.formLogin.value
    if (form && form.email && form.password) {
      console.log(this.formLogin.value);
      Swal.fire({
        title:'iniciando sesión...',
        didOpen: ()=> Swal.showLoading()
      })
      this._loginServ.login(form).subscribe(({token, mensaje})=>{
        if (token) {
          this._loginServ.setToken(token)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sesión iniciada',
            showConfirmButton: false,
            timer: 1500
          })
          this._router.navigate(['/'])
        }
        else{
          Swal.close()
        }
        
      },({error})=>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.mensaje,
        })
      })
    }
  }
 
  ngOnInit(): void {
  }

}
