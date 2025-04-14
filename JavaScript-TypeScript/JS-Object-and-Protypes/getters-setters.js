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
            // if (typeof valor !== 'number') {
            //     console.log('Bad value');
            //     return;
            // }

            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            // return stockPrivate = value;
            stockPrivate = value;
            // console.log(value);
        }
    });
};

// getters/setters -> Simulation that method (object) of function is propertie

// factory
function createProduct() {
    return {
        get name() {
            return nome;
        },
        set name(valor) {
            valor = valor.replace('something', '');
            nome = valor;
        }
    };
}

// const p1 = new Product('Shirt', 20, 3);
// console.log(p1);
// p1.stock = 'The value that i want.';
// p1.stock = 500;
// console.log(p1.stock);

// factory function / not need of word new
const p2 = createProduct('Camisa')
console.log(p2); //{ nome: [Getter/Setter] }
p2.nome = 'Any something'
console.log(p2.nome); //{ nome: [Getter/Setter] }