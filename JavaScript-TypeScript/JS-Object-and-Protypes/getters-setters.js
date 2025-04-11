function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    // warning: is possible cause a loop infinite when if use this with getters or setters
    let stockPrivate = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // display a key
        configurable: true, // configuration

        // only display the value
        get: function() {
            return stockPrivate;
        },

        set: function(value) {
            return stockPrivate = value;
            // console.log(value);
        }
    });
};

// getters/setters -> Simulation that method (object) of function is propertie

const p1 = new Product('Shirt', 20, 3);
console.log(p1);
p1.stock = 'The value that i want.';
console.log(p1.stock);