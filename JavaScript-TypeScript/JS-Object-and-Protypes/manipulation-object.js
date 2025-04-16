// Object Literal -> new Object -> Object.prototype
const objA = {
    keyA: 'A',
    // __proto__: Object.prototype
};

// for confirm the prototype
//objA.__proto__ === Object.prototype - true

const objB = {
    keyB: 'B',
    // __proto__: objA
};

const objC = new Object();
objC.keyC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objB.keyA)
console.log(objC.keyA);

Object.getPrototypeOf(objA);

// --------------------------------------------------------------------
function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.increase = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

const p1 = new Product('Short', 50);
p1.discount(100);
p1.increase(100);
console.log(p1);
Object.setPrototypeOf(p2, Product.prototype);

p2.increase(10);

const p2 = {
    name: 'Teste',
    price: 20
};

// Object.prototype
const p3 = Object.create(Product.prototype, {
    increase: {
        price: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 42
        },
        size: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 23
        },
    }
});
p3.price = 113;
console.log(p3);
p2.increase(100);