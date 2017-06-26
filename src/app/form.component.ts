/**
 * Created by victor on 26/06/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {EmployeeService, Employee} from "./employee.service";

@Component({
    selector: 'employee-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    @Input()
    employee: Employee = new Employee();

    constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location) {
    }

    save(): void {
        this.employeeService.save(this.employee).then(() => this.employee = new Employee());
        this.location.back();

    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            let param = +params['id']; // (+) converts string 'id' to a number
            this.employeeService.getEmployee(param).then((emp) => this.employee = this.simpleClone(emp));
        });
    }

    simpleClone(obj: any) {
        return Object.assign({}, obj);
    }


}