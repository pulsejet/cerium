import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-w-multiple-choice',
  templateUrl: './w-multiple-choice.component.html',
  styleUrls: ['./w-multiple-choice.component.css']
})
export class WMultipleChoiceComponent implements OnInit {

  @Input() editable = false;
  @Input() checkbox = false;
  @Input() props: any = {};

  @ViewChildren('option') options;

  constructor() { }

  ngOnInit() {
    if (!this.props.options) {
      this.props.options = [{
        value: 'Option 1'
      }];
    }

    if (!this.editable) {
      if (!this.props.validators.required || this.props.response) {
        this.props.validated = true;
      }
      if (!this.props.response) {
        this.props.response = '';
      }
    }
  }

  newOption(e: any) {
    this.props.options.push({value: e.target.value});
    e.target.value = '';
    const ivl = setInterval(() => {
      if (this.options.toArray().length === this.props.options.length) {
        this.options.toArray()[this.props.options.length - 1].nativeElement.focus();
        clearInterval(ivl);
      }
    }, 10);
  }

  remove(i: number) {
    this.props.options.splice(i, 1);
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
       this.props.options,
       event.previousIndex,
       event.currentIndex
    );
  }

  otherChange(e: any) {
    this.props.other_val = e.target.value;
    this.props.response = this.props.other_val;
  }

  validate() {
    if (!this.props.validators.required) {
      this.props.validated = true;
      return;
    }

    // Different validation for each
    if (!this.checkbox) {
      this.props.validated = true;
    } else {
      this.props.validated = (this.props.other_checked && this.props.other_val);
      this.props.validated = this.props.validated || this.props.options.some(m => m.checked);
    }

    // Construct response
    if (this.checkbox && this.props.validated) {
      this.props.response = this.props.options.filter(o => o.checked).map(o => o.value);
      if (this.props.other_checked) {
        this.props.response.push(this.props.other_val);
      }
    }
  }

}
