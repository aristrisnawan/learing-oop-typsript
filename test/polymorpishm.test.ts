describe("Polymorpishm", () => {
    class Employee {
        constructor(public name: string) {}
    }
    class Manager extends Employee{}

    const sayHello = (employee: Employee) => {
        console.info(`Hello ${employee.name}`);
    }
    class VicePresident extends Manager{}
    it("should can use polymorpishm", () => {
        let employee: Employee = new Employee("Mark");
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