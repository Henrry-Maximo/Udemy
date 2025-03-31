// Return a sum of double all the pairs
// -> Filter pairs
// -> Double the values
// -> Reduce (sum all)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, , 15, 22, 27];

// const numbersPairs = numbers.filter(function(valor) {
//   return valor % 2 === 0;
// }).map(function(valor) {
//   return valor * 2;
// }).reduce(function(ac, valor) {
//   return ac + valor;
// });

// Convert for arrow function
// const numbersPairs = numbers.filter((valor) => {
//   return valor % 2 === 0;
// }).map((valor) => {
//   return valor * 2;
// }).reduce((ac, valor) => {
//   return ac + valor;
// });

// Remove `return and ()`, only a row
const numbersPairs = numbers
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor);

// console.log(numbersPairs); // [ 50,   80,  2,  8, 22 ]
// console.log(numbersPairs); // [ 100, 160,  4, 16, 44 ]
console.log(numbersPairs); // 324
