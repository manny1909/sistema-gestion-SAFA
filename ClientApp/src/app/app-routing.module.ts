import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { LandingComponent } from './component/landing/landing.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', canActivate: [NoAuthGuard], component: LoginComponent },
  { path: 'registrarse', canActivate: [NoAuthGuard], component: RegistrarseComponent },
  { path: 'admin', canActivateChild: [AuthGuard], loadChildren: () => AdminModule, component: AdminComponent },
  { path: 'user', canActivateChild: [AuthGuard], loadChildren: () => UserModule, component: UserComponent },
  { path: '', pathMatch:'full', canActivate: [NoAuthGuard], component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
