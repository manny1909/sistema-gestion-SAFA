import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from 'src/app/component/side-nav/side-nav.component';
import { accordionSidenavComponent } from 'src/app/component/accordeon-sidenav/accordion-sidenav.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideNavComponent,
    accordionSidenavComponent,
  ],
  imports: [
    CommonModule,
    CdkAccordionModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [
    //módulos
    //componentes
    SideNavComponent,
    accordionSidenavComponent,
    //pipes
    //directivas
  ]
})
export class SharedModule { }
