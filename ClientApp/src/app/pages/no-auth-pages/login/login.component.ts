import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: UntypedFormGroup = this._fb.group({})
  constructor(private _fb: UntypedFormBuilder,
    private _authService: AuthService,
    private _router: Router) {
    this.buildForms();
  }

  buildForms() {
    this.formLogin = this._fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.pattern(''), Validators.required])]
    })
  }
  enviar() {
    const form = this.formLogin.value
    if (form && form.email && form.password) {
      console.log(this.formLogin.value);
      Swal.fire({
        title: 'iniciando sesión...',
        didOpen: () => Swal.showLoading()
      })
      this._authService.login(form).subscribe(({ token, mensaje }) => {
        if (token) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sesión iniciada',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          Swal.close()
        }

      }, ({ error }) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.mensaje,
        })
      })
    }
  }
  ir(ruta: string) {
    this._router.navigate([ruta])
  }
  ngOnInit(): void {
  }

}
