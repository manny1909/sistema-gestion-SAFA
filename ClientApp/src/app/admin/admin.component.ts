import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

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

}

