"use strict";
describe("Abstract", () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
    }
    class RegulerCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name} my name is ${this.name}`);
        }
    }
    it("should can use abstract class", () => {
        const customer1 = new RegulerCustomer(1, "Mark");
        customer1.sayHello("Alice");
    });
});
