function* generatorOne() {
  // Codebase any...
  yield 'Value 1';
  // Codebase any...
  yield 'Value 2';
  // Codebase any...
  yield 'Value 3';
};

const g1 = generatorOne();
console.log(g1); // Object [Generator] {}
console.log(g1.next()); // { value: 'Value 1', done: false }
console.log(g1.next().value); // Value 1
console.log(g1.next().value); // Value 2
console.log(g1.next().value); // Value 3
console.log(g1.next()); // { value: undefined, done: true }

// The 'for' knows when the function ends
for (let valor of g1) {
  console.log(valor);
};

function* generatorTwo() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g2 = generatorTwo();
console.log(g2.next().value); // 0
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* generatorThere() {
  yield 0;
  yield 1;
  yield 2;
}

function* generatorFour() {
  yield* generatorThere();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generatorFour();
for(let valor of g4) {
  console.log(valor);
}

function* generatorFive() {
  yield function() {
    console.log('Vim do y1');
  };

  return function() {
    console.log('Vim do return')
  }

  // ...

  yield function() {
    console.log('Vim o y2')
  };
}

const g5 = generatorFive();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1(); // Vim do y1
func2(); // Vim do y2