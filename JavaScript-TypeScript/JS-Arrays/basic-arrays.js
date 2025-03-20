
// Creating an Array Literal
//                     0   1   2
const names = ['', '', '']; // Array Literal
// String, Objetos, Funções, Números
names[2] = ''; // New the array && changing the value at index 2 (third element)

// -------------------------------------------------------------------------

// Constructor and delete
const names = new Array('Test', 'Test01', 'Test02');
names[2] = 'Test';
delete names[2]; // Appending delete in index (third element in array)
console.log(names);

// -------------------------------------------------------------------------

// Values reference in memory and copy using the Spread Operatr
const names = ['Eduardo', 'Maria', 'Joana'];
const newArray = names;

new.pop();
console.log(names);
console.log(newArray);