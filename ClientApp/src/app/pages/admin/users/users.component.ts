import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLegacyTableDataSource } from '@angular/material/legacy-table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreateUserComponent } from 'src/app/modals/create-user/create-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class UsersComponent implements OnInit {
sendCredentials(_t14: any) {
throw new Error('Method not implemented.');
}

  usuarios: any[] = new Array()
  displayedColumnsUsuarios: string[] = [
    'actions',
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
  constructor(private _usuarioService: UsuarioService, public dialog: MatDialog) { }

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
  openCreateModal() {
    const dialogRef = this.dialog.open(CreateUserComponent, { width: '50%' })
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
      this.addUser(result)
    })
  }
  addUser(data: { discord: string, email: string, name: string, roles: any[] }) {
    const { discord, email, name, roles } = data
    if (discord && email && name && Array.isArray(roles)) {
      const user = {
        ...data,

      }
      this._usuarioService.addUser(user).subscribe((response: any) => {
        console.log(response)
      })
    }
  }
  deleteUser(element: any) {
    console.log(element)
  }
  editUser(element: any) {
    console.log(element)
  }

}

