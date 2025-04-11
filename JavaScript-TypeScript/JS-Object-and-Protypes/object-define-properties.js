// defineProperty - defineProperties

function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;

  Object.defineProperty(this, 'stock', {
    enumerable: true, // mostra a chave
    value: stock, // valor
    // value: function() {
    //   return stock;
    // },
    writable: false, // pode alterar
    configurable: true // configurável
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: true,
      configurable: true 
    },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true 
    }
  });
};

const p1 = new Product('Cmiseta', 20, 3);
p1.stock = 50000; // allow a new value
console.log(p1.name); // variable public of object

console.log(Object.keys(p1)); // arrays ode keys

for (let keys in p1) {
  console.log()
}