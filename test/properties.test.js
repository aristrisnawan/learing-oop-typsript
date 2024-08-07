"use strict";
describe('Properties', () => {
    class Customer {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should can have properties', () => {
        const customer = new Customer(1, 'Alice');
        customer.age = 30;
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);
    });
    it('should can have methode', () => {
        const customer = new Customer(1, 'Ahmad');
        customer.sayHello('Budi');
        console.info(customer);
    });
});
