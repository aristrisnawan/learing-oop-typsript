describe('Interface', () => {
    interface HasName {
        name:string;
    }
    interface canSayHello {
        sayHello(name:string):void;
    }

    class Person implements HasName, canSayHello {
        name: string;

        constructor(name:string){
            this.name = name;
        }   

        sayHello(name: string) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support inharitance', () => {
        const person = new Person('Alice');
        person.sayHello('Bob');
    });
});