class Person {
  constructor(name, surname) {
    this.name = name;
    tihis.surname = surname;
  };

  say() {
    console.log(`${this.name} it's eating.`);
  };

  eat() {
    console.log(`${this.name} it's saying.`);
  };

  toDrink() {
    console.log(`${this.name} it's drinking.`);
  };
};

function Person2(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person2.prototype.say = function() {
  console.log(`${this.name} it's saying.`)
};

const p1 = new Person("Henrry", "Max");
console.log(p1);
