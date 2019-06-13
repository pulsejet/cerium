import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    DragDropModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports : [
    DragDropModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class PrimeComponentsModule { }
