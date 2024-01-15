import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/guards/no-auth.guard';
import { LoginComponent } from 'src/app/pages/no-auth-pages/login/login.component';
import { RegistrarseComponent } from 'src/app/pages/no-auth-pages/registrarse/registrarse.component';
import { LandingComponent } from 'src/app/pages/no-auth-pages/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: 'registrarse', component: RegistrarseComponent },
      { path: '', component: LandingComponent },
    ]
  },
]


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    RegistrarseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports:[
    RouterModule
  ]
})
export class NoAuthModule { }
