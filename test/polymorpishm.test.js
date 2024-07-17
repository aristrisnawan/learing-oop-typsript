"use strict";
describe("Polymorpishm", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    const sayHello = (employee) => {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello Vice President ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const managaer = employee;
            console.info(`Hello Manager ${managaer.name}`);
        }
        else {
            console.info(`Hello Employee ${employee.name}`);
        }
    };
    it("should can use polymorpishm", () => {
        let employee = new Employee("Mark");
        console.info(employee);
        employee = new Manager("Alice");
        console.info(employee);
        employee = new VicePresident("Bob");
        console.info(employee);
    });
    it("should support method", () => {
        sayHello(new Employee("Mark"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Charlie"));
    });
});