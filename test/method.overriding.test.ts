describe("Method Overriding", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string) {
            console.info(`Hello ${name} my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        
        sayHello(name: string) {
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
