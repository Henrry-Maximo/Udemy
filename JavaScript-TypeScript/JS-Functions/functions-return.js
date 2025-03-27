// `return`
// return -> value
// finished a function

// summary: functions that returning values and others not

function sum(a, b) {
  return a + b;
};

console.log(sum(5, 2)); // 7

function sumTwo(a, b) {
  console.log(a + b);
};

let total = sumTwo(5, 2);
console.log(total); // undefined

// function that not return data
document.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
});

function createPerson(name, surname) {
  return { name, surname };
};

const p1 = createPerson('Luiz', 'Otávio');
console.log(p1); // typeof

const p2 = {
  name: 'João',
  surname: 'Oliveira'
};

function sayPhrase(begin) {
  function sayRest(rest) {
    return begin + ' ' + rest;
  };

  return sayRest;
};

const helloWorld = sayPhrase('Hello');
// console.log(helloWorld('world!'));
const rest = helloWorld('world!');
console.log(rest);

function duplica(n) {
  return n * 2;
};

function triplica(n) {
  return n * 3;
};

function quadriplica(n) {
  return n * 4;
};

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function createMultiplier(multiplier) {
  // function multiplication(n) {
  //   return n * multiplier;
  // };

  // return multiplication

  return function(n) {
    return n * multiplier;
  };
};

const duplica = createMultiplier(2);
const triplica = createMultiplier(3);
const quadriplica = createMultiplier(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));