// Not heritage in JS / The correct is delegate
// Product - Itens: T-shirt, mug and pencil

/* 
Context:
  T-shirt: Cor
  Mug: Material
*/

function Product(name, price) {
  this.name = name;
  this.price = price;

  // warning: without methods here, only write in prototype
};

Product.prototype.increase = function(amount) {
  this.price += amount;
};

Product.prototype.discount = function(amount) {
  this.price -= amount;
};

function Tshirt(name, price, cor) {
  Product.call(this, name, price);
  this.cor = cor;
};
// Any functions have a prototype by default with value undefined
// Creating a object, getting prototype of product and inserting in tshirt prototype
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt; // Who?

Tshirt.prototype.increase = function(percent) {
  this.price = this.price + (this.price * (percent / 100))
};

function Mug(name, price, material, stock) {
  Product.call(this, name, price);
  this.material = material;
  // this.stock = stock; using getters and setters for manipulation

  Object.defineProperty(this, 'stock', {
    enumerable: true, // visible
    configurable: false, // not delete, not update
    get: function () {
      return stock;
    },
    set: function(value) {
      if (typeof value !== 'number') return;
      stock = value;
    }
  })
};

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

// const mug = new Mug('Henrry', 10, 'Ceramics');
// console.log(mug);

const mug = new Mug('Mug', 13, 'Plastic', 5);
const tshirt = new Tshirt('regatta', 7.5, 'Black');
const product = new Product('gen', 111);

console.log(mug.stock);
console.log(mug);
console.log(tshirt);
console.log(product);
// tshirt.increase(100);

// Each function have your prototype