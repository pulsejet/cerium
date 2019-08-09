import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

interface Forms {
  ID: string
  Name: string
  Token: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forms: Forms[];
  origin = window.location.origin;
  getError = null;

  constructor(
    public router: Router,
    public http: HttpClient,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    if (!this.dataService.ensureLogin()) { return; }

    this.http.get<Forms[]>(`api/forms`).subscribe(f => {
      if (!f) {
        this.router.navigate(['/new']);
      } else {
        this.forms = f;
      }
    }, (err) => {
      this.getError = {}
      this.getError.message = err.error.message;
      this.getError.status = err.status;
    })
  }

  removeSection(id: string, name: string) {
    if (confirm(`Delete form ${name}? This action is irreversible! \nAll responses will also be deleted.`)) {
      const observable = this.http.delete(`api/form/${id}`);

      observable.subscribe((result: any) => {
        for (let i = 0; i < this.forms.length; i++) {
          if (this.forms[i].ID === id) {
            this.forms.splice(i, 1)
          }
        }
      }, (e) => {
        console.error(e);
        alert(e.message);
      });
    }
  }
}
