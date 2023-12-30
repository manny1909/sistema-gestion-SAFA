import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(private _usuarioService: UsuarioService) { }

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
  addUser() {

  }
  removeUser() {

  }
}
