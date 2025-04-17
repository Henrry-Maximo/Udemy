// 705.484.350-52 070.927.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
If number is bigger that 9, then value is 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
if number is bigger that 9, then value is 0.

705.484.450-52 === 705.484.450-52
*/

let cpf = '705.484.450-52';

// expression regulation
let cpfClear = cpf.replace(/\D+/g, '');
// console.log(Array.from(cpfClear)); // ['7', '0', '5', '4', '8', '4', '4', '5', '0', '5', '2']
cpfArray = Array.from(cpfClear);
console.log(cpfArray.map(el => el));
console.log(cpfClear.reduce((ac, value ) => ac * Number(value), 0));
//console.log(cpfClear); // 70548445052

70548445052