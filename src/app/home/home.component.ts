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

  constructor(
    public router: Router,
    public http: HttpClient,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    if (!this.dataService.ensureLogin()) { return; }

    const Observable = this.http.get<Forms[]>(`/api/forms`).subscribe(f => {
      if (!f) {
        this.router.navigate(['/new']);
      } else {
        this.forms = f;
      }
    })
  }

  removeSection(id: number, name: string) {
    if (confirm(`Delete form ${name}? This action is irreversible! \nAll responses will also be deleted.`)) {
      const observable = this.http.delete(`/api/form/${id}`);

      observable.subscribe((result: any) => {
        alert(`Form ${name} has been deleted!`)
        window.location.reload();
      }, (e) => {
        console.error(e);
        alert(e.message);
      });
    }
  }
}
