import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IForm } from '../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: string;
  form: IForm;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.http.get(`/api/form/${this.id}`).subscribe((form: IForm) => {
      this.form = form;
    });
  }

  submit() {
    console.log(this.form);
  }

}
