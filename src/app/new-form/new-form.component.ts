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
  submitted = false;
  submission = '';

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
    this.submitted = true;
    this.http.post('/api/form', this.form).subscribe((result: any) => {
      this.submission = `${window.location.origin}/form/${result.id}/0`;
      this.form = null;
    }, (e) => {
      this.submitted = false;
      console.error(e);
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
