
try {
  console.log(notExist);
} catch (e) {
  console.error('Not exists in codebase.')
}

// not display information about the program for the user

function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // handler only string
    // throw('x and y needing be numbers.');

    // handler with Error (ReferenceError)
    // class (functions) constructors for errors
    throw new Error('x and y needing be numbers.');
  }
  
  return x + y;
}

try {
  console.log(sum(1, 2));
  console.log(sum('1', 2));
} catch (e) {
  console.error(e);
}