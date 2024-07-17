"use strict";
describe('Super Constructor', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should can call super constructor', () => {
        const employee = new Employee('Alice', 'IT');
        console.info(employee.name);
        console.info(employee.department);
        console.info(employee);
    });
});
