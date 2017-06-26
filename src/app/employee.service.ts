/**
 * Created by victor on 25/06/2017.
 */
import {Injectable} from '@angular/core';

export class Employee {
    id: number;
    name: string;
    lastName: string;
    email: string
}


export const EMPLS: Employee[] = [
    {id: 1, name: 'Ionel', lastName: 'Popescu', email: 'ion.popescu@activ.ro'},
    {id: 2, name: 'Gigel', lastName: 'Ionescu', email: 'gigel.ionescu@activ.ro'},
    {id: 3, name: 'Alexandru', lastName: 'Popa', email: 'alexandru.popa@activ.ro'},
    {id: 4, name: 'Daniel', lastName: 'Simion', email: 'daniel.simion@activ.ro'},
    {id: 5, name: 'Margareta ', lastName: 'Popescu', email: 'margareta.popescu@activ.ro'},
];


@Injectable()
export class EmployeeService {

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getEmployees(): Promise<Employee[]> {
        return new Promise(resolve => {

            setTimeout(() => resolve(EMPLS), 2000);
        });
    }

    save(newEmp: Employee): Promise<Employee[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                let oldItem = EMPLS.find(emp => emp.id == newEmp.id);
                console.log(`found old item {oldItem}`)
                if (!oldItem ) {
                    EMPLS.push(newEmp);
                } else {
                    oldItem.name = newEmp.name;
                    oldItem.lastName = newEmp.lastName;
                    oldItem.email = newEmp.email;
                }
                resolve(EMPLS);
            }, 2000);
        });
    }

}
