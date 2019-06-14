import { Component, OnInit, Input, Output } from '@angular/core';
import { IWidget, WIDGET_TYPES, WIDGET_OPTIONS } from '../interfaces';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-widget',
  templateUrl: './editable-widget.component.html',
  styleUrls: ['./editable-widget.component.css']
})
export class EditableWidgetComponent implements OnInit {

  @Input() widget: IWidget;
  @Output() delete = new EventEmitter();
  @Output() duplicate = new EventEmitter();
  WIDGET_TYPES = WIDGET_TYPES;
  WIDGET_OPTIONS = WIDGET_OPTIONS;
  Object = Object;

  constructor() { }

  ngOnInit() {
    if (!this.widget.props) {
      this.widget.props = { question: 'Untitled Question' };
    }
    if (!this.widget.props.validators) {
      this.widget.props.validators = { required: false };
    }
  }

}
