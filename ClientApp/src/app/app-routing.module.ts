import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { LandingComponent } from './component/landing/landing.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'', component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
