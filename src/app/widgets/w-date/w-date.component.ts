import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-w-date',
  templateUrl: './w-date.component.html',
  styleUrls: ['./w-date.component.css']
})
export class WDateComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  response = new FormControl();

  constructor() { }

  ngOnInit() {
    if (!this.editable) {
      // Setup validators
      if (this.props.validators) {
        const validators = [];
        if (this.props.validators.required) {
          validators.push(Validators.required);
        }
        this.response.setValidators(validators);
      }

      // Initialize
      this.response.updateValueAndValidity();
      this.props.validated = this.response.valid;

      // Setup variables
      this.response.valueChanges.subscribe(v => {
        this.props.response = v;
        this.props.validated = this.response.valid;
      });
    } else {
      this.response.disable();
    }
  }
}
