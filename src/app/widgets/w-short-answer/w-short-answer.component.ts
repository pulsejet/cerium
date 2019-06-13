import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-short-answer',
  templateUrl: './w-short-answer.component.html',
  styleUrls: ['./w-short-answer.component.css']
})
export class WShortAnswerComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  constructor() { }

  ngOnInit() {
  }

}
