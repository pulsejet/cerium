import { Component, OnInit, Input } from '@angular/core';
import { WIDGET_TYPES, IWidget, IPage } from '../interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  @Input() page: IPage;

  constructor() { }

  ngOnInit() {
    this.page.widgets.push({
      type: WIDGET_TYPES.date
    } as IWidget);
  }

  addWidget() {
    this.page.widgets.push({
      type: WIDGET_TYPES.short_answer
    } as IWidget);
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
       this.page.widgets,
       event.previousIndex,
       event.currentIndex
    );
  }

}
