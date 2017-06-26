import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TableComponent} from "./table.component";
import {EmployeeService} from "./employee.service";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form.component";


const routes: Routes = [
  {
    path: 'edit/:id',
    component: FormComponent
  }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, TableComponent, FormComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ EmployeeService ]
})
export class AppModule { }
