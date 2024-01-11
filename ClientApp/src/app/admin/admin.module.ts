import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from '../guards/auth.guard';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSidenavModule } from '@angular/material/sidenav'

import { AdminUsersComponent } from '../component/admin-users/admin-users.component';
import { AdminComponent } from './admin.component';
import { CreateUserComponent } from '../modals/create-user/create-user.component';
const routes: Routes = [
  { path: 'adminUsers', component: AdminUsersComponent },
  { path: '', redirectTo: 'adminUsers' },
  { path: '**', redirectTo: '' },
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
  declarations: [
    AdminUsersComponent,
    AdminComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatSidenavModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
