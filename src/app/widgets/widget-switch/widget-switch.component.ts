import { Component, OnInit, Input } from '@angular/core';
import { WIDGET_TYPES, IWidget } from 'src/app/interfaces';

@Component({
  selector: 'app-widget-switch',
  templateUrl: './widget-switch.component.html',
  styleUrls: ['./widget-switch.component.css']
})
export class WidgetSwitchComponent implements OnInit {

  constructor() { }

  @Input() widget: IWidget;
  @Input() editable = false;
  WIDGET_TYPES = WIDGET_TYPES;

  ngOnInit() {
  }

}
