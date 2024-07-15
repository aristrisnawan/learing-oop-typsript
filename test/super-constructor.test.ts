describe('Super Constructor', () => {
    class Person {
        name:string;

        constructor(name:string){
            this.name = name;
        }
    }

    class Employee extends Person {
        department:string;

        constructor(name:string, department:string){
            super(name);
            this.department = department;
        }
    }
    it('should can call super constructor', () => {
        const employee = new Employee('Alice', 'IT');
        console.info(employee.name);
        console.info(employee.department);
        console.info(employee);
    });
});