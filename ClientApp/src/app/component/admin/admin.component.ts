import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { faction } from 'src/app/interfaces/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private _router:Router
  ) { }
  navega(opt: faction) {
    switch (opt) {
      case 'SAPD': {
        this._router.navigate(['admin/sapd'])
        break
      }
      case 'SAFA': {
        this._router.navigate(['admin/safa'])
        break
      }
      case 'FBI': {
        this._router.navigate(['admin/fbi'])
        break
      }
      case 'CNN': {
        this._router.navigate(['admin/cnn'])
        break
      }
      case 'WWE': {
        this._router.navigate(['admin/wwe'])
        break
      }
      case 'ABOGADOS': {
        this._router.navigate(['admin/abogados'])
        break
      }
      default:
        break;
    }
  }

}

