describe("Relationship", () => {
    class Person {
        constructor(public name: string) {}
    }
    class Customer {
        constructor(public name: string) {}
    }
    it("should can use relationship", () => {
        const person: Person = new Customer("Mark");
        console.info(person.name);
    });
});