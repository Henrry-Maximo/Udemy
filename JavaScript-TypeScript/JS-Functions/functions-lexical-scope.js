const user = 'Henrry';

// Lexical scope: search the values, if not find, get the values of father until global values
function sayName() {
  const user = 'Henrry 2'
  console.log(user);
};
// sayName(); // Henrry

function useSayName() {
  sayName();
};
useSayName();

function useSayName() {
  const user = 'Henrry 3';
  sayName();
};
useSayName();