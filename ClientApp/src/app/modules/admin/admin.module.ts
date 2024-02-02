import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog'
import { MatSidenavModule } from '@angular/material/sidenav'
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AuthGuard } from '../../guards/auth.guard';

import { UsersComponent } from '../../pages/admin/users/users.component';
import { AdminComponent } from '../../component/admin/admin.component';
import { CreateUserComponent } from '../../modals/create-user/create-user.component';
import { SideNavComponent } from 'src/app/component/side-nav/side-nav.component';
import { accordionSidenavComponent } from 'src/app/component/accordeon-sidenav/accordion-sidenav.component';

const routes: Routes = [
  { path: 'adminUsers', component: UsersComponent },
  { path: '', pathMatch:'full', redirectTo: 'adminUsers' },
  { path: '**', redirectTo: '' },
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    UsersComponent,
    AdminComponent,
    CreateUserComponent,
],
    exports: [
        RouterModule
    ]
})
export class AdminModule { }
