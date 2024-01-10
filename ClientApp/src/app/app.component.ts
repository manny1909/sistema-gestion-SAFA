import { Component, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';
import { map, take, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  constructor(private _authService: AuthService, private _storageService:StorageService) {
  }
  ngOnInit(): void {
    this._authService.initialize()
  }
}
