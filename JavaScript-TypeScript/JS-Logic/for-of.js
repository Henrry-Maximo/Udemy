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

names.forEach(function(el, index) {
  console.log(el, index);
});

