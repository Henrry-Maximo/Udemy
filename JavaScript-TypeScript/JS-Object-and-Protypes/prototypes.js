// Construtora -> Molde (classe)
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.nameComplete = () => 'Orignal: ' +
        this.name + ' ' + this.surname;
}
// -> Warning: if you have very instances, may have thousands of copies identical occupying memory

// using prototype of function (created automatic by js)
person1.prototype.meHere = 'teste';
// p1.__proto__ === Pessoa.prototype // true (intern js)

Person.prototype.nameComplete = function() {
    return this.name + ' ' + this.surname;
}

// Herança prototípica
// The instances receive automatic all the properties and methods of Person.prototype
// console.log(Person.prototype === person1.__proto__)
const person1 = new Person('L', 'o.'); // <- Person = Function constructor
const person2 = new Person('M', 'a.'); // <- Person = Function constructor

console.dir(person1);
console.dir(person2);