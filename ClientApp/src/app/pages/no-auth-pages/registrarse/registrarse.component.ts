import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  formRegistrarse:FormGroup = this._fb.group({})

  constructor(private _fb:FormBuilder,
    private _authService:AuthService,
    private _router:Router) {
      this.buildForms()
     }

  ngOnInit(): void {
  }
  ir(ruta:string){
    this._router.navigate([ruta])
  }
  buildForms(){
    this.formRegistrarse = this._fb.group({
      email:['', Validators.compose([Validators.email, Validators.required])],
      name:['', Validators.compose([ Validators.required])],
      password:['', Validators.compose([Validators.pattern(''), Validators.required])]
    })
  }
  enviar(){
    const form = this.formRegistrarse.value
    if (this.formRegistrarse.valid) {
      Swal.fire({
        title:'Cargando...',
        didOpen: ()=> Swal.showLoading()
      })
      this._authService.registrarse(form).subscribe(({ok})=>{
        if (ok) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha registrado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.ir('login')
        }
        else{
          Swal.close()
        }

      },({error})=>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se ha podido completar el registro',
        })
        console.error(error.mensaje);
      })
    }
  }
}
