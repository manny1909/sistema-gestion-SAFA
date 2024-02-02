import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
    selector: 'modal-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss'],
    standalone: true,
    imports: [MatDialogModule]
})
export class CreateUserComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  addUser() {

  }
}
