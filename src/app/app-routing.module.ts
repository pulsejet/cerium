import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewFormComponent },
  { path: 'edit/:id', component: NewFormComponent },
  { path: 'edit/:id/:page', component: NewFormComponent },
  { path: 'm/:id', component: FormComponent },
  { path: 'm/:id/:page', component: FormComponent },
  { path: 'response/:id', component: ResponseComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
