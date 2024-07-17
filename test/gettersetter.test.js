"use strict";
describe('Getter Setter', () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return 'Empty';
            }
        }
        set name(value) {
            if (value !== '') {
                this._name = value;
            }
        }
    }
    it('should can have getter and setter', () => {
        const category = new Category();
        category.name = 'Laptop';
        console.info(category.name);
    });
});
