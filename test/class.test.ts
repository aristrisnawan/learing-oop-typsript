describe('Class', () => {
    class Customer {
        constructor() {
            console.info('Customer constructor');
        }
    }
    class Order {}
    it('should can create class', () => {
        const customer: Customer = new Customer();
        const order = new Order();
    });
    it('should can create constructor', () => {
        new Customer();
        new Customer();
    });
});