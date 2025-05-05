const fruits = ['Apple', 'Pear', 'Grape'];
const person = {
  name: 'Joe',
  surname: 'Henrry',
  age: 30
};

const key = 'name';

console.log(person.name);
console.log(person['name']);
console.log(person[key]);

// for classic
for (let i = 0; i < fruits.length; i++) {
  // ...
};

// for in: using the indices of object
for (let index in fruits) {
  // console.log(fruits[index]);
};

for (let keys in person) {
  // console.log(keys);
  console.log(keys, person[keys]);
};