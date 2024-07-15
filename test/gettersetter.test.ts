describe('Getter Setter', () => {
    class Category {
        _name?: string;

        get name(): string {
            if (this._name){
                return this._name;
            }else{
                return 'Empty';
            }
        }

        set name(value: string) {
            if (value !== ''){
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