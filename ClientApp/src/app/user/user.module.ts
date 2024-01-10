import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: ''
  }
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ],
  exports: [RouterModule]
})
export class UserModule { }
