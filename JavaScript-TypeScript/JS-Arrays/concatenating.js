const numbers01 = [1, 2, 3];
const numbers02 = [4, 5, 6];
// const numbers03 = numbers01 + numbers02; // string
// console.log(numbers03); // 1, 2, 34, 5, 6

// Using o method `concat`
// const numbers03 = numbers01.concat(numbers02, [7, 8, 9], 'Henrry');
// console.log(numbers03); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Henrry' ]

// Using the rest operator: ... rest -> ...spread
const numbers03 = [ ...numbers01, 'Henrry', ...numbers02, ...[7, 8, 9] ]; // [ 1, 2, 3 'Luiz', 4, 5, 6, [7, 8, 9] ]
