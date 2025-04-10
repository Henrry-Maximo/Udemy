
function Person(name, surname) {
  // Attributes or methods privates
  const ID = 123456;
  const methodInternal = function() {
    // example: validation CPF
  };

  // Attributes or methods publics
  this.name = name;
  this.surname = surname;

  this.method = () => {
    console.log(this.name + ': im a method.')
  };
}

// return object of persons
const p1 = new Person('Henrry', 'Maximo');
console.log(p1.name);
console.log(p2.name);
p1.method();

