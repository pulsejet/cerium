import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cerium';
  initialized = false;
  getError = null;

  constructor(
    public dataService: DataService,
    public http: HttpClient,
  ) {}

  ngOnInit() {
    // Skip if logging in
    if (window.location.href.indexOf('?code=') !== -1 ) {
      this.initialized = true;
      return;
    }

    // Get profile
    this.http.get<IUser>('api/login').subscribe(u => {
      this.dataService.setUser(u);
      this.initialized = true;
    }, err => {
      if (err.status === 401) {
        this.initialized = true;
      } else {
        this.getError = {}
        this.getError.message = err.error.message;
        this.getError.status = err.status;
      }
    });
  }

  logout() {
    if (confirm("Do you want to log out?")) {
      this.http.get('api/logout').subscribe(u => {
        this.dataService.setUser(null);
      })
    }
  }
}
