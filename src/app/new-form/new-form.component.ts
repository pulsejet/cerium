import { Component, OnInit } from '@angular/core';
import { IForm, IPage } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form: IForm = {} as IForm;

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.form.pages = [] as IPage[];
    if (this.form.pages.length === 0) {
      this.form.pages.push({} as IPage);
    }
  }

  save() {
    this.http.post('/api/form', this.form).subscribe(result => {
      console.log(result);
    });
  }

  addSection(index: number) {
    this.form.pages.splice(index + 1, 0, {} as IPage);
  }

  removeSection(index: number) {
    if (confirm('Remove section? This action is irreversible!')) {
      this.form.pages.splice(index, 1);
    }
  }
}
