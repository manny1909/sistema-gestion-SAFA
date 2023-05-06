import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
