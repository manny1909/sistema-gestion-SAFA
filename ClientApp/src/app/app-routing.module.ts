import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './component/user/user.component';
import { NoAuthModule } from './modules/no-auth/no-auth.module';

const routes: Routes = [

  { path: 'admin', canActivateChild: [AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then((x) => x.AdminModule), component: AdminComponent },
  { path: 'user', canActivateChild: [AuthGuard], loadChildren: () => import('./modules/user/user.module').then(x => x.UserModule), component: UserComponent },
  { path: '', canActivate: [NoAuthGuard], loadChildren: () => NoAuthModule },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
