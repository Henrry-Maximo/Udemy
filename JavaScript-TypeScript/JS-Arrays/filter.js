// Filter -> Ever return an array, with the same amount of elements or less
// Return the numbers larger that 10

const listNumbers = [0, 11, 13, 15, 16, 2, 3, 6, 1, 75, 5, 8];

listNumbers.filter((row) => {
  if (row >= 10) {
    console.log(row)
  }
});

// indice, array
function callbackFilter(valor) {
  // if (valor > 10) {
  //   return true;
  // } else {
  //   return false;
  // };

  return valor > 10;
};

// const numberosFiltrados = listNumbers.filter(callbackFilter);
const numberosFiltrados = listNumbers.filter(function (valor, indice, array) {
  console.log(valor, index, array);
  return valor > 10;
});
// const numberosFiltrados = listNumbers.filter(valor => {
//   return valor > 10;
// });
// const numberosFiltrados = listNumbers.filter(valor => valor > 10);

// console.log(numberosFiltrados);

const persons = [
  {
    name: "Luiz", age: 62
  },
  {
    name: "Maria", age: 23
  },
  {
    name: "Eduardo", age: 55
  },
  {
    name: "Letícia", age: 19
  },
  {
    name: "Rosana", age: 32
  },
  {
    name: "Wallace", age: 47
  },
];

const limitCaracter = 5;
const limitAge = 50;
const personsOnlyFiveLetter = persons.filter((row) => {
  return row.name.length >= limitCaracter;
});

const personsWithMore50Ages = persons.filter(row => row.age.length > limitAge);

const personsOnlyLetterA = persons.filter(function(valor) {
  // if (valor.name.slice(-1) === "a") {
  //   console.log(valor);
  // };

  if (valor.name.toLowerCase().endsWith('a'));
});

console.log(personsOnlyFiveLetter);
console.log(personsWithMore50Ages);



