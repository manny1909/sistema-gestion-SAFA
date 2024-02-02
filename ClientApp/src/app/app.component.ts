import { Component, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';
import { map, take, tap } from 'rxjs/operators'
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  constructor(private _authService: AuthService, private _storageService:StorageService) {
  }
  ngOnInit(): void {
    this._authService.initialize()
  }
}
