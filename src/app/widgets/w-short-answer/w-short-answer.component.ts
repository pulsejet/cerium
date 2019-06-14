import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-w-short-answer',
  templateUrl: './w-short-answer.component.html',
  styleUrls: ['./w-short-answer.component.css']
})
export class WShortAnswerComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};
  @Input() big = false;

  response = new FormControl('');

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
    }
  }
}
