// const isTrue = true;

// let text = 'Text';
// let nome = 'Text 2'; // creating
// let text = 'Text'; - redeclaração

// var name2 = 'Text';
// var name2 = 'Text';

// var name2 = 'Text 2';
// console.log(nome, name2)

// let have escopo of block
// if (isTrue) {
//   let nome = 'Text'; // creating
//   // console.log(nome, name2);
//   // console.log('Ok');

//   if (isTrue) {
//     let nome = 'Other something'; // if not found, search at the root
//     // console.log(nome, name2, 'OK');
//   }
// }

// ----------------------------------

// let name = 'Name';
// var name2 = 'Name';

// if (isTrue) {
//   let name = 'Name 2';
//   var name2 = 'Name 2';

//   if (isTrue) {
//     let name = 'Other something';
//     var name2 = 'Name 3'; 
//   } 
// };

// console.log(name, name2) // Name, Name 3

// -------------------------------------------
// values of function is protected
// function sayHello () {
//   var name = 'Show';
//   console.log(name); // ✅
// }

// ❌ console.log(sayHello);
// sayHello();

// values defined outside the function
// var surname = 'GLPi'

// function sayHello() {
//   var surname = 'GLPi'
//   console.log(surname);

//   if (isTrue) {
//     let nome = 'Luiz';
//     console.log(surname)
//   }

//   console.log(nome);
// }

// ❌ console.log(sayHello);
// sayHello();

// Elevação (hosting)
// var and function
// console.log(surname);

// first declaration, after use
// var surname = 'result';

// vs 

// ❌ Error
// console.log(surname);
// let surname = 'result';

// ✅ Approvedd
// console.log(surname);
// let surname = 'result';