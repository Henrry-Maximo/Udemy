function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {

    // if (reject) {
    //   return;
    // }

    // if (typeof msg !== 'string') reject("Bad Value");
    // if (typeof msg !== 'string') reject(new Error('ERRO'));
    if (typeof msg !== 'string') reject(false);

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
// waitThere(`Phrase 1`, rand(1, 3))
// .then(response => {
//   console.log(response);
//   return waitThere(`Phrase 2`, rand(1, 3))
// })
// .then(response => {
//   console.log(response);
//   return waitThere('phrase 3', rand(1, 3))
// }).then(response => {
//   console.log(response);
// }).then(() => {
//   console.log("I'm will be the last in display");
// })
// .catch();
// waitThere(`Phrase 2`, rand(1, 3));
// waitThere(`Phrase 3`, rand(1, 3));

waitThere(`Connection with the BD`, rand(1, 3))
.then(response => {
  console.log(response);
  return waitThere(`Searching the data in database`, rand(1, 3))
})
.then(response => {
  console.log(response);
  return waitThere(2222, rand(1, 3))
}).then(response => {
  console.log(response);
}).then(() => {
  console.log("Display data.");
})
.catch(e => {
  console.log("Erro: ", e);
});

console.log("It's console log will be display first.")