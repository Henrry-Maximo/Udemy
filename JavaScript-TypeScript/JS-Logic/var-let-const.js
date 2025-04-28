const isTrue = true;

// let text = 'Text';
let nome = 'Text 2'; // creating
// let text = 'Text'; - redeclaração

// var name2 = 'Text';
var name2 = 'Text';

var name2 = 'Text 2';
console.log(nome, name2)

// let have escopo of block
if (isTrue) {
  let nome = 'Text'; // creating
  // console.log(nome, name2);
  // console.log('Ok');

  if (isTrue) {
    let nome = 'Other something'; // if not found, search at the root
    // console.log(nome, name2, 'OK');
  }
}

// ----------------------------------

let name = 'Name';
var name2 = 'Name';

if (isTrue) {
  let name = 'Name 2';
  var name2 = 'Name 2';

  if (isTrue) {
    let name = 'Other something';
    var name2 = 'Name 3'; 
  } 
};

console.log(name, name2) // Name, Name 3