const say = {
  say() {
    console.log(`${this.name} it's eating.`);
  }
}

const eat = {
  eat() {
    console.log(`${this.name} it's saying.`);
  }
}

const toDrinking = {
  toDrinking() {
    console.log(`${this.name} it's drinking.`);
  }
}

// Decoupling/Mixin (composition - several objects with the other objects):
// get object A and to paste in it the methods of B, without heritage classic 
// const personPrototype = {
//   ...say,
//   ...eat,
//   ...toDrinking

  // say() {
  // },

  // eat() {
  // },

  // toDrink() {
  // },
// }
const personPrototype = Object.assign({}, say, eat, toDrinking);

function createPerson(name, surname) {

  // Using factory function
  // created a prototype for the methods / not methods coupled in object
  // ...prototype
  
  // Methods exists in proto 
  // Saying the type of value / Assign values / PropertyDescriptorMap
  // Now the values they are assigned directly in object prototype 
  return Object.create(personPrototype, {
    name: {value: name},
    surname: {value: surname}    
  });

  // return {
    // name,
    // surname,

    // methods coupled in object, and it's consumer resources
    // fix: add the methods in proto of object
    // not want return object literal

    // say() {
    //   console.log(`${this.name} it's eating.`);
    // },

    // eat() {
    //   console.log(`${this.name} it's saying.`);
    // },

    // toDrink() {
    //   console.log(`${this.name} it's drinking.`);
    // },
  // };
}

const p1 = createPerson('Henrry', 'Máximo');
const p2 = createPerson('Luiz', 'Silva');
// console.log(p1);
console.log(p2.say());
console.log(p2.eat());
console.log(p2.toDrink());

// Carefull: the hierarchy of heritage can be fragile
// Passing something of father for children
// Prevention: used composition