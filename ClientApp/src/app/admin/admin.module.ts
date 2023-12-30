import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from '../component/admin-users/admin-users.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'adminUsers', component: AdminUsersComponent },
      { path: '', component: AdminUsersComponent },
      { path: '**', redirectTo:'' },
    ]
  }
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
  ]
})
export class AdminModule { }
