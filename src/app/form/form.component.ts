import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IForm, IPage } from '../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: string;
  pagen: number;
  form: IForm;
  page: IPage;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { }

  getRouterParams() {
    this.id = this.route.snapshot.params.id;
    this.pagen = Number(this.route.snapshot.params.page);
  }

  ngOnInit() {
    this.getRouterParams();
    this.http.get(`/api/form/${this.id}`).subscribe((form: IForm) => {
      this.form = form;
      this.page = this.form.pages[this.pagen];
    });

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.getRouterParams();
        this.page = this.form.pages[this.pagen];
      }
    });
  }

  submit() {
    console.log(this.form);
  }

  canSectionSubmit() {
    return Number(this.pagen) === Number(this.form.pages.length - 1);
  }

  nextPage() {
    return ['/form', this.id, Number(this.pagen) + 1];
  }

}
