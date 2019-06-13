import { Component, OnInit } from '@angular/core';
import { IForm, IPage, IWidget, WIDGET_TYPES } from '../interfaces';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form: IForm = {} as IForm;

  constructor() { }

  ngOnInit() {
    this.form.pages = [] as IPage[];
    if (this.form.pages.length === 0) {
      this.form.pages.push({ widgets: [] } as IPage);
    }
  }

  save() {
    console.log(this.form);
  }
}
