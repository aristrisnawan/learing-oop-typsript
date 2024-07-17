"use strict";
describe('Interface', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support inharitance', () => {
        const person = new Person('Alice');
        person.sayHello('Bob');
    });
});
