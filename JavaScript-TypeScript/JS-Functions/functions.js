// declaration of function (Function Hoisted)
function sayHello() {
  console.log('hello');
}

// First-Class Objects
// Function Expression
const imAData = function() {
  console.log('Im a data.');
};

// const imAData = function nameOfFunction() {
//   console.log('Im a data.');
// };
// imAData();

function executeFunction(func) {
  console.log('Executing you function below: ')
  func();
};

executeFunction(imAData);

// Arrow Function (EcmaScript 2015 - ES6)
const functionArrow = () => {
  console.log('Im a arrow function');
};

functionArrow();

// Within of a object
const obj = {
  say: function() {
    console.log("Im saying...")
  }
};

// const obj = {
//   say() {
//     console.log("Im saying...")
//   }
// };

obj.say();