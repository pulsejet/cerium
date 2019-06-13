import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EditableWidgetComponent } from './editable-widget/editable-widget.component';
import { WShortAnswerComponent } from './widgets/w-short-answer/w-short-answer.component';
import { WParagraphComponent } from './widgets/w-paragraph/w-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    EditableWidgetComponent,
    WShortAnswerComponent,
    WParagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
