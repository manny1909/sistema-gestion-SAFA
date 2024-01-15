import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSidenavModule } from '@angular/material/sidenav'
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AuthGuard } from '../../guards/auth.guard';

import { UsersComponent } from '../../pages/admin/users/users.component';
import { AdminComponent } from '../../component/admin/admin.component';
import { CreateUserComponent } from '../../modals/create-user/create-user.component';
import { SideNavComponent } from 'src/app/component/side-nav/side-nav.component';
import { accordionSidenavComponent } from 'src/app/component/accordeon-sidenav/accordion-sidenav.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  { path: 'adminUsers', component: UsersComponent },
  { path: '', redirectTo: 'adminUsers' },
  { path: '**', redirectTo: '' },
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
  declarations: [
    UsersComponent,
    AdminComponent,
    CreateUserComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
