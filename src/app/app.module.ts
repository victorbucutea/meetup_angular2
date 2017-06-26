import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";


/*const routes: Routes = [
  {
    path: 'edit/:id',
    component: FormComponent
  }
];*/


@NgModule({
  imports:      [ BrowserModule, FormsModule, /*RouterModule.forRoot(routes) */],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
