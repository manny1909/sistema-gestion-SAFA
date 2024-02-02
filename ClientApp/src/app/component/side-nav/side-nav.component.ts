import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { faction } from 'src/app/interfaces/types';
import { AuthService } from 'src/app/service/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { accordionSidenavComponent } from '../accordeon-sidenav/accordion-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    standalone: true,
    imports: [MatSidenavModule, accordionSidenavComponent, MatIconModule, RouterOutlet]
})

export class SideNavComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  ngOnInit(): void {
    const submenuItems = document.querySelectorAll('.submenu');

    submenuItems.forEach((submenu) => {
      const parentMenuItem = submenu.parentElement;
      const menuItemLink = parentMenuItem?.querySelector('.alink');

      if (parentMenuItem && menuItemLink) {
        menuItemLink.addEventListener('click', (event) => {
          event.preventDefault();

          const submenuElement = submenu as HTMLElement;
          if (submenuElement.style.display === 'block') {
            submenuElement.style.display = 'none';
          } else {
            submenuElement.style.display = 'block';
          }
        });
      }
    });
  }
  navega(route:string | undefined){
    console.log('route', route)
  }
  logout(){
    this._authService.logout().subscribe(() => {
      console.log('cierre de sesión')
     })
  }

}
