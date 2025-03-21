const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for of
for (let valor of a1) {
  console.log(valor);
}

a1.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
  console.log(array[indice]);
  console.log(valor);
});

// arrow function
a1.forEach(valor => {
  console.log(valor);
});

// iterable only in an row
a1.forEach(valor => console.log(valor));

// Simulation of reduce with forEach
let total = 0;
a1.forEach(valor => {
  total += valor;
});
console.log(total); // result: 450

// forEach, forOf, forIn, for, while, do while
