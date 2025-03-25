
const listNumbers = [0, 11, 13, 15, 16, 2, 3, 6, 1, 75, 5, 8];
// const numbersInDouble = listNumbers.map(function(valor) {
// console.log(valor, indice, array);
// return valor * 2;
// });

// const numbersInDouble = listNumbers.map((valor) => {
// console.log(valor, indice, array);
//   return valor * 2;
// });

const numbersInDouble = listNumbers.map(valor => valor * 2);

console.log(numbersInDouble);

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
const names = persons.map(obj => obj.name);
// const ages = persons.map(function(obj) {
  // delete obj.nome;
  // return { idade: obj.idade };
  // return obj;
// });
const ages = persons.map(obj => ({ idade: obj.persons }));

// const withIds = persons.map(function(obj, indice) {
//   obj.id = (indice + 1) * 1000;
//   return obj;
// });

// console.log(withIds);
console.log(ages);

// Creating a new array
const withIds = persons.map(function(obj, indice) {
  const newObj = {...obj};
  newObj.id = indice;
  return newObj;
});