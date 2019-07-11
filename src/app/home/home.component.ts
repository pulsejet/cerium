import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Forms {
  ids: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forms: Forms;

  constructor(
    public router: Router,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    const Observable = this.http.get<Forms>(`/api/forms`).subscribe(f => {
      if (f.ids.length === 0) {
        this.router.navigate(['/new']);
      } else {
        this.forms = f;
      }
    })
  }

}
