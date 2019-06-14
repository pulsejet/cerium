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
    if (!this.page.widgets || this.page.widgets.length === 0) {
      this.page.widgets = [];
      this.page.widgets.push({
        type: WIDGET_TYPES.multiple_choice
      } as IWidget);
    }
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

  duplicate(i: number) {
    this.page.widgets.splice(i + 1, 0, JSON.parse(JSON.stringify(this.page.widgets[i])));
  }

}
