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
    'nombre',
    'email',
    'password',
    'estado',
    'sesion',
    'edad',
    'observaciones',
  ]
  columnsToDisplay: string[] = this.displayedColumnsUsuarios.slice()
  dataTableUsuarios: MatTableDataSource<any> = new MatTableDataSource()
  constructor(private _usuarioServ: UsuarioService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers() {
    this._usuarioServ.getUsers().subscribe((_usuarios: any[]) => {
      this.usuarios = _usuarios
      console.log(this.usuarios);
      this.dataTableUsuarios.data = this.getTableUser(this.usuarios);
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
