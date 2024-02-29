import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'modal-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss'],
    standalone: true,
    imports: [MatDialogModule, ReactiveFormsModule,
       MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule]
})
export class CreateUserComponent implements OnInit {
formCreateUser: FormGroup = new FormGroup({});
roles: any[] = [
  {
    id: 0,
    value:'prueba'
  }
]
constructor(
  private _fb: FormBuilder,
  @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  buildFormCreateUser(){
    return this._fb.group({
      discord: ['', Validators.compose([Validators.required,])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required,])],
      roles: [null, Validators.compose([Validators.required,])],
    })
  }

  ngOnInit(): void {
    this.formCreateUser = this.buildFormCreateUser()
  }

  addUser() {
    console.log('object')
    this.data = this.formCreateUser.value
  }
}
