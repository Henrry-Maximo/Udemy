// function expression / arguments only for function (not arrow)
// function -> 'arguments' that stores all the arguments sent
function func() {
  // parameters -> a, b, c, e, f (initilize with values undefined)
  //          func(1, 2, 3)
  // parameters -> a, b, c
  // console.log('Hello');
  // console.log(arguments[0]);
  let total = 0;
  for (let row of arguments) {
    total += row;
  };

  console.log(total);
  console.log(total, a, b, c);
}

// func('Valor');
// func('value', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Henrry');
func(1, 2, 3, 4, 5, 6, 7);

// function funcValues(a, b = 2, c = 4) {
  // b = b || 2;
//   console.log(a + b + c);
// }

// funcValues(2);
//funcValues(2, undefined, 20); // using values default

// function funcValues({ name, surname, age }) {
//   console.log(name, surname, age);
// };

// funcValues({ name: 'Henrry', surname: 'Maximo', age: 21 }); // object literal
// OR
// let obj = { name: 'Henrry', surname: 'Maximo', age: 21 };
// funcValues(obj);

// function funcValues([ value1, value2, value3 ]) {
//   console.log(value1, value2, value3);
// };

// funcValues([ 'Henrry', 'Maximo', 21 ]);

//                                     rest operator
// function account(operator, accumulator, ...numbers) {
// const account = function(operator, accumulator, ...numbers) {
const account = (...args) => {
  for (let number of numbers) {
    if (operator === '+') accumulator += number;
    if (operator === '-') accumulator -= number;
    if (operator === '/') accumulator /= number;
    if (operator === '*') accumulator *= number;
    
    // console.log(number);
  };

  console.log(args); // [ '+', 1, 20, 30, 40, 50 ]

  console.log(arguments); // [Arguments] { '0': '+', '1': 1, '2': 20, '3': 30, '4': 40, '5': 50 }

  console.log(operator, accumulator, numbers);
  console.log(accumulator);
};
// account('+', 0, [20, 30, 40, 50]);
account('+', 0, 20, 30, 40, 50);
