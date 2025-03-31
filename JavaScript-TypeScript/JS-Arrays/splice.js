const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// names.splice(indice, delete, elem1, elem2, elem3);
// pop

// I want remove the element selected being only a of array
// splice return element how a array
const removing = names.splice(3, 2);
console.log(names, removing); // [ 'Maria', 'João', 'Eduardo' ] [ 'Gabriel', 'Júlia' ]

// With numbers negative is position of right for left

//   -5        -4        -3         -2          -1
//    0         1         2          3           4
// ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// For remove all elements at array is using the Constuctor `Number.MAX_VALUE`