describe("Parameter Properties", () => {
    class Person {

        constructor(public name: string) {
            
        }
    }
    it("should can use parameter properties", () => {
        const person = new Person("Mark");
        console.info(person.name);
        person.name = "Alice";
        console.info(person.name);
    });
});