import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'', component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
