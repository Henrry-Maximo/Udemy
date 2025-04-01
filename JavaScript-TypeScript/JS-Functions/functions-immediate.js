// IIFE -> Immediately invoked function expression

function anySome() {
  console.log(1213123123);
};

anySome();

// JQuery -> Library
(function( age ) {
  // const name = 'Henrry';
  // console.log(name);

  // console.log(1213123123);

  const surname = 'Maximo'
  function createName(name) {
    return name + ' ' + surname;
  }

  function sayName() {
    console.log(createName('Lima'));
  };

  sayName();
  console.log(age);
})(21);
// "()": execute immediately / not leak for out of scope
const name = 'teste';
