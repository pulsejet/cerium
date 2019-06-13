import { Component, OnInit, Input } from '@angular/core';
import { IWidget, WIDGET_TYPES } from '../interfaces';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() widget: IWidget;
  WIDGET_TYPES = WIDGET_TYPES;

  constructor() { }

  ngOnInit() {
  }

}
