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

}
