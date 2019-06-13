import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-paragraph',
  templateUrl: './w-paragraph.component.html',
  styleUrls: ['./w-paragraph.component.css']
})
export class WParagraphComponent implements OnInit {

  @Input() editable = false;
  @Input() props: any = {};

  constructor() { }

  ngOnInit() {
  }

}
