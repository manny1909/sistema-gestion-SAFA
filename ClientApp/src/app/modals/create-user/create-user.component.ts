import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog';

@Component({
    selector: 'modal-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss'],
    standalone: true,
    imports: [MatLegacyDialogModule]
})
export class CreateUserComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  addUser() {

  }
}
