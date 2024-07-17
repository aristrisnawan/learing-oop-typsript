"use strict";
describe("Relationship", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it("should can use relationship", () => {
        const person = new Customer("Mark");
        console.info(person.name);
    });
});
