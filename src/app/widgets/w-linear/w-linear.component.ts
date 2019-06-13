import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-linear',
  templateUrl: './w-linear.component.html',
  styleUrls: ['./w-linear.component.css']
})
export class WLinearComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  lowerValues = [0, 1];
  upperValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  options: number[];

  constructor() { }

  ngOnInit() {
    if (!this.props.lower || !this.props.upper) {
      this.props.lower = 1;
      this.props.upper = 5;
    }

    if (!this.editable) {
      this.options = [];
      for (let i: number = this.props.lower; i <= this.props.upper; i++) {
        this.options.push(i);
      }
    }
  }

}
