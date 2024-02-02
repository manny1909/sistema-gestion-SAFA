import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../component/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: '', pathMatch:'full',
  }
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    UserComponent,
],
    exports: [RouterModule]
})
export class UserModule { }
