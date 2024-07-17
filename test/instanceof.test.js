"use strict";
describe("Instanceof", () => {
    class Employee {
    }
    class Manager {
    }
    const employee = new Employee();
    const manager = new Manager();
    it("should have problem using use typeof", () => {
        console.info(typeof employee);
        console.info(typeof manager);
    });
    it("should can use instanceof", () => {
        console.info(employee instanceof Employee);
        console.info(employee instanceof Manager);
        expect(employee instanceof Employee).toBe(true);
    });
});
