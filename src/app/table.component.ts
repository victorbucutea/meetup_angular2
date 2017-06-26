/**
 * Created by victor on 25/06/2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EmployeeService, Employee} from "./employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'employee-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

    employees: Employee[];

    @Input() selectedEmp : Employee = new Employee();
    @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private employeeService: EmployeeService,
                private router: Router,) {
    }

    ngOnInit(): void {
        this.employeeService.getEmployees().then(emps => this.employees = emps);
    }

    select(employee: Employee) : void {
        this.selectedEmp = employee;
        this.notify.emit(employee);
    }

    edit(employee: Employee) : void {
        this.router.navigate(['/edit', employee.id]);
    }
}
