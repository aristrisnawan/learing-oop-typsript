describe("Abstract", () => {

    abstract class Customer {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        abstract sayHello(name: string): void;
    }

    class RegulerCustomer extends Customer {
        name: string;
        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name} my name is ${this.name}`);
        }
    }
    it("should can use abstract class", () => {
        const customer1 = new RegulerCustomer(1, "Mark");
        customer1.sayHello("Alice");
    });
});