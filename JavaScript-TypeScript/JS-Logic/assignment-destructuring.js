let a = 'A';
let b = 'B';
let c = 'C';

// assignment through destructuring
// const numbers = [1, 2, 3];
// [a, b, c] = numbers;

// console.log(a, b, c);

// -------------------------------------------

// for each indice is assignment a value 
// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

// -------------------------------------------

//               0  1  2  3  4  5  6  7  8
// const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const firstNumber = number[0];
// console.log(firstNumber);
// console.log(numbers[0]); // 1

//                                using the rest of something
// const [ firstNumber, secondNumber, ...rest ] = numbers;
// console.log(firstNumber, secondNumber);

// Getting values of array by separete
const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const [ one, , three, , five, , sete ] = numbers;
// console.log(one, theree, ); // 1000 3000 5000

const number = [
  [1, 2, 3], [4, 5, 6], [7, 8, 0]
];

console.log(number[1][2]); // 6
const [, [ , , seis]] = number;
console.log(seis)

const [ , , [ , , zero] ] = number;
console.log(zero);

const [lista1, lista2, lista3] = number;
console.log(lista3[2]);