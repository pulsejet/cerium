import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'new', component: NewFormComponent },
  { path: 'form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
