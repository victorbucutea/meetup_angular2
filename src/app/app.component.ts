import {Component, Input} from '@angular/core';
import {TableComponent} from './table.component';
import {FormComponent} from './form.component';
import { Employee} from "./employee.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    employee: Employee ;

    edit(emp: Employee ) : void {
        this.employee = emp;
    }
}
