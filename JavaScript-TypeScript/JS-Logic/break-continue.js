const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newBuffer = new ArrayBuffer(numbers);
// console.log(newBuffer);

for (let number of numbers) {

  // Jump for the next iterator
  if (number === 2) {
    console.log('Jumping the number two.')
    continue; 
  }

  // if (number === 3) {
  //   continue;
  // }

  // switch (number) {
  //   case 1:
  //     continue;
  //   case 2: 
  //     continue;
  //   case 5:
  //     continue;
  // }

  console.log(number); // display too the number seven

  if (number === 7) {
    console.log('Found number seven with sucessful, exit...')
    break;
  }

  console.log(number);
}

for (let i in numbers) {
  let number = numbers[i];

  console.log(number);
}

console.log("#################################");

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  console.log(number);
}

console.log("#################################");

let i = 0;
while (i < numbers.length) {
  let number = numbers[i];

  if (number === 2) {
    i++;
    continue;
  }

  console.log(number);

  i++;
}