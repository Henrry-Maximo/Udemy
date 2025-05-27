function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {

    if (reject) {
      return;
    }

    setTimeout(() => {
      console.log(msg);
      resolve(msg);

      // if(cb) cb(); - callback
    }, time);
  });
}

// using callback for execute in correct order
// waitThere(`Phrase 1`, rand(1, 3), function() {
//   waitThere(`Phrase 2`, rand(1, 3), function() {
//     waitThere(`Phrase 3`, rand(1, 3));
//   });
// });

// Not sequence
waitThere(`Phrase 1`, rand(1, 3))
.then(response => {
  console.log(response);
  return waitThere(`Phrase 2`, rand(1, 3))
})
.then(response => {
  console.log(response);
  return waitThere('phrase 3', rand1(1, 3))
}).then(response => {
  console.log(response);
}).then(() => {
  console.log("I'm will be the last in display");
})
.catch();
// waitThere(`Phrase 2`, rand(1, 3));
// waitThere(`Phrase 3`, rand(1, 3));
