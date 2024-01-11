import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateUserComponent } from 'src/app/modals/create-user/create-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  usuarios: any[] = new Array()
  displayedColumnsUsuarios: string[] = [
    'discord',
    'name',
    'email',
    'password',
    'state',
    'token',
    'age',
    'observations',
  ]
  columnsToDisplay: string[] = this.displayedColumnsUsuarios.slice()
  dataTableUsuarios: MatTableDataSource<any> = new MatTableDataSource()
  constructor(private _usuarioService: UsuarioService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers() {
    this._usuarioService.getUsers().subscribe((_usuarios: any[]) => {
      this.usuarios = _usuarios
      console.log(this.usuarios);
      this.dataTableUsuarios.data = this.usuarios;
    })
  }
  getTableUser(usuarios: any[]): any[] {
    return usuarios.map(usuario => {
      return usuario





    })
  }
  openCreateModal(){
    const dialogRef = this.dialog.open(CreateUserComponent)
    dialogRef.afterClosed().subscribe((result) => { 
      console.log(`Dialog result: ${result}`)
     })
  }
  addUser() {

  }
  removeUser() {

  }
}
