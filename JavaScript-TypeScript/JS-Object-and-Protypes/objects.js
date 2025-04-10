// object literal
// '' "" `` []
const person = {
  name: 'Henrry',
  surname: 'Maximo'
};

// Annotation of point and brackets
// access value dinamyc
const key = 'name';
console.log(person[key]);
// console.log(person.name) || // console.log(person['name'])
// console.log(person.name) || // console.log(person['surname'])

// constructor of array
const person1 = new Object();
person1.name = 'Henrry';
pessoa1.surname = 'Otávio';

console.log(person1.name);
console.log(person1.surname);

const person2 = {
  name: 'Henrry',
  surname: 'Maximo'
};

console.log(person2);

// Delete item
const person1 = new Object();
person1.name = 'Henrry';
pessoa1.surname = 'Otávio';

delete person1.name;
console.log(person1.name);
console.log(person1.surname);

// method in array of object and using
const person1 = new Object();
person1.name = 'Henrry';
pessoa1.surname = 'Otávio';
person1.age = 30;
person1.sayName = function() {
  return (`${this.name} it's saying your name.`);
  // console.log(`${this.name} it's saying your name.`);
};
person1.getDateBirth = function() {
  const dateCurrent = new Date();
  return dateCurrent.getFullYear() - this.age;
};

console.log(person1.getDateBirth());

for (let key in person1) {
  console.log(person1[key]);
}

// JS -> Protótipos
// Factory Functions / Constructor functions / Classes

// Factory Functions
function createPerson(name, surname) {
  return {
    name,
    surname,
    get nameComplete() {
      return `${this.name} ${this.surname}`
    }
  };
}

const p1 = createPerson('Henrry', 'Maximo');
console.log(p1.nameComplete());

// Constructor Functions
function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  Object.freeze(this);
}

// apesar de ser uma função, o que é retornado é um object (mesma coisa de um objeto literal)
// new -> vai criar um objeto vázio e atrelar a palavra chave `this`
// this -> irá variar de acordo com que cria
// e faz o return de `this`
const p1 = new Person('Henrr', 'Maximo');
// Object.freeze(p1); realizar um travamento do object
// alterando o valor de um ponto no endereço da memória
P1 = 'Outra coisa'; // tentando trocar a referência de memória
// não há como alterar o endereço atual
p1.name = 'Other some';
const p2 = new Person('Henrr', 'Maximo');
// representa o constructor, quem criou este objeto,
console.log(p1); // Person { name: 'Henrr', surname: 'Maximo' }

// const p2 = {};
// p2.name = 'Henrry';