"use strict";
describe('Inheritance', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should can extends class', () => {
        const employee = new Employee('Alice');
        console.info(employee.name);
        const manager = new Manager('Bob');
        console.info(manager.name);
        const director = new Director('Charlie');
        console.info(director.name);
    });
});
