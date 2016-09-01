import { Employee } from "./Employee";
export class Department {

    _employees: Array<Employee>;
    constructor(names: Array<string>) {

        this._employees = names.map(name => new Employee(name,"aftabansari10662@gmail.com"));
    }

    doWork(): void {

        this._employees.forEach(employee => {
            console.log(`${employee.name} is working`)
        });
    }
}