// Object.assign(des, any);
// Object.getOwnPropertyDescriptor(o, 'prop');
// ...(spread)

// já vimos
// Object.keys (retorna as chaves)
// Object.freeze (conge)a o objeto)
// Object.defineProperties (define várias propriedades)
// Object.defineProperty (define uma propriedade)

// linkar: point to the same memory address
// const product = {
//     name: 'Top',
//     price: 1.8
// };
// const otherSomething = product;

// otherSomething.nome = 'Other name';
// otherSomething.price = 2.5;
// console.log(product);
// console.log(otherSomething);

// // how copy datas
// const product = {
//     name: 'Produto',
//     price: 1.8
// };
// const caneca = {...product, material: 'porcelana' };

// caneca.nome = 'Other name';
// caneca.price = 2.5;
// console.log(product); // { nome: 'Produto', preco: 1.8 }
// console.log(caneca); // { nome: 'Outro nome', preco: 2.5, material: 'porcelana' }

// using the method assign
// const product = {
//     name: 'Produto',
//     price: 1.8
// };
// const caneca = Object.assign({}, product, { material: 'porcelana' });

// caneca.nome = 'Other name';
// caneca.price = 2.5;
// console.log(product); // { nome: 'Produto', preco: 1.8 }
// console.log(caneca); // { nome: 'Outro nome', preco: 2.5, material: 'porcelana' }

// ----------------------------------------------------------------------
// const product = {
//     name: 'Produto',
//     price: 1.8
// };
// const caneca = { nome: product.name, preço: product.price };

// caneca.nome = 'Other name';
// caneca.price = 2.5;
// console.log(product); // { nome: 'Produto', preco: 1.8 }
// console.log(caneca); // { nome: 'Outro nome', preco: 2.5, material: 'porcelana' }

// Display the keys of produtcs
// const product = {
//     name: 'Produto',
//     price: 1.8
// };
// const caneca = { nome: product.name, preço: product.price };
// console.log(Object.keys(product)); //[ 'nome', 'preço' ]

// Blocking change in product object
// const product = {
//     name: 'Produto',
//     price: 1.8
// };
// Object.freeze(Product);
// product.name = 'Other name'
// const caneca = { nome: product.name, preço: product.price };
// console.log(Object.keys(product)); //[ 'nome', 'preço' ]

// using getOwnPropertyDescriptor for display informations about the object
const product = {
    name: 'Produto',
    price: 1.8
};
Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false,
    value: 'Any other something'
});
console.log(Object.getOwnPropertyDescriptor(product, 'name'));
product.name = 'Other something';
delete product.name;
delete product.price;
console.log(product);