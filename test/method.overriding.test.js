"use strict";
describe("Method Overriding", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name} my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            super.sayHello(name);
            console.info(`And i am your manager`);
        }
    }
    it("should can override method", () => {
        const employee = new Employee("Mark");
        employee.sayHello("Alice");
        const manager = new Manager("Bob");
        manager.sayHello("Charlie");
    });
});
