import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EditableWidgetComponent } from './editable-widget/editable-widget.component';
import { WShortAnswerComponent } from './widgets/w-short-answer/w-short-answer.component';
import { WParagraphComponent } from './widgets/w-paragraph/w-paragraph.component';
import { PrimeComponentsModule } from './prime-components.module';
import { NewPageComponent } from './new-page/new-page.component';
import { FormComponent } from './form/form.component';
import { WidgetComponent } from './widget/widget.component';
import { WMultipleChoiceComponent } from './widgets/w-multiple-choice/w-multiple-choice.component';
import { WidgetSwitchComponent } from './widgets/widget-switch/widget-switch.component';
import { WLinearComponent } from './widgets/w-linear/w-linear.component';
import { WDateComponent } from './widgets/w-date/w-date.component';
import { WTimeComponent } from './widgets/w-time/w-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    EditableWidgetComponent,
    WShortAnswerComponent,
    WParagraphComponent,
    NewPageComponent,
    FormComponent,
    WidgetComponent,
    WMultipleChoiceComponent,
    WidgetSwitchComponent,
    WLinearComponent,
    WDateComponent,
    WTimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
