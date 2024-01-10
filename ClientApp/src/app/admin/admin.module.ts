import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from '../component/admin-users/admin-users.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from '../guards/auth.guard';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
