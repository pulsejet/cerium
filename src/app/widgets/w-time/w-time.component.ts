import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-w-time',
  templateUrl: './w-time.component.html',
  styleUrls: ['./w-time.component.css']
})
export class WTimeComponent implements OnInit {

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

      // Get back value
      if (this.props.response) {
        this.response.setValue(this.props.response);
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
