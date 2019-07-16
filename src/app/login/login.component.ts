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

  constructor(
    private activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params.code;
      this.golang();
    });
  }

  golang() {
    this.http.post<IUser>('/api/login', {
      code: this.code,
      redirect_uri: window.location.href.split('?')[0]
    }).subscribe(r => {
      this.dataService.setUser(r);

      const redir = localStorage.getItem('login_redir')
      if (redir && redir != "") {
        this.router.navigateByUrl(redir);
        localStorage.removeItem('login_redir')
      } else {
        this.router.navigate(['/home']);
      }
    }, (e) => {
      alert(e.message);
    });
  }

}
