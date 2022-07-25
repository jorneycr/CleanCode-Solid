class Product {
    constructor(
        public name: string = ''
    ) { }

    toString() {
        if (this.name.length <= 0) throw Error('name is empty');
        return `${this.name}`;
    }

}

(() => {
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants.toString());

})();