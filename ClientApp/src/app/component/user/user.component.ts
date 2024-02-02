import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    standalone: true,
    imports: [SideNavComponent]
})
export class UserComponent implements OnInit {

  constructor(private _authService:AuthService) { }

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
  logout(){
    this._authService.logout().subscribe(() => {
      console.log('cierre de sesión')
     })
  }
}
