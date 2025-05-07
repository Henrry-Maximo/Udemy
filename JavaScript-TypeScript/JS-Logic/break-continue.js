const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newBuffer = new ArrayBuffer(numbers);
console.log(newBuffer);

for (let number of numbers) {

  // Jump for the next iterator
  if (number === 2) {
    continue; 
  }

  console.log(number);
}