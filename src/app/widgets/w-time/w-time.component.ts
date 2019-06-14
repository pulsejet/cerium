import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-time',
  templateUrl: './w-time.component.html',
  styleUrls: ['./w-time.component.css']
})
export class WTimeComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  constructor() { }

  ngOnInit() {
  }

}
