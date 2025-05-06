const names = ['Henrry', 'Joe', 'Anne'];

for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
};

for (let index in names) {
  // console.log(names[index]);
};

for (let value of names) {
  // console.log(value);
}

names.forEach(function(el, index, array) {
  // console.log(el, index, array);
});

// Context in that we can using the for

const person = {
  name: 'Henrry',
  surname: 'Max'
};

for (let key in person) {
  // console.log(key); // only display keys
  console.log(person[key]); // only display values
};

