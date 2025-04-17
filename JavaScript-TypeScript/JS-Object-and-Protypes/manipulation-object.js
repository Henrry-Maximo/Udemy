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
}; // creating class for using with prototype

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.increase = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

const p1 = new Product('Short', 50);
p1.discount(100); // result: 0
p1.increase(100); // result: 100
console.log(p1);

// literal
const p2 = {
    name: 'Mug',
    price: 20
};

Object.setPrototypeOf(p2, Product.prototype); // object receive prototype

p2.increase(10); // using methods of p2 (aumento)
console.log(p2);

p2.discount(10); // using methods of p2 (aumento)
console.log(p2);

// Object.prototype: appeding configuration in methods of class (prototype)
const p3 = Object.create(Product.prototype, {
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
    // increase: {  
    // }
});

p3.price = 113;
console.log(p3);