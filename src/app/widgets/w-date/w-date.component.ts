import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-date',
  templateUrl: './w-date.component.html',
  styleUrls: ['./w-date.component.css']
})
export class WDateComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  constructor() { }

  ngOnInit() {
  }

}
