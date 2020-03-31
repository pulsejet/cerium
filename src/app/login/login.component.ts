import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  code: string;
  origin_url: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params.code;
      const url = new URL(window.location.href);
      this.origin_url = decodeURI(url.searchParams.get("state"));
      this.golang();
    });
  }

  golang() {
    this.http.post<IUser>('api/login', {
      code: this.code,
      redirect_uri: window.location.href.split('?')[0]
    }).subscribe(r => {
      this.dataService.setUser(r);
      window.location.href = this.origin_url;
    }, (e) => {
      alert(e.message);
    });
  }

}
