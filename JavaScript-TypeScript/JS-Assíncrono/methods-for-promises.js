function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

/*
Promise.all -> Executar várias promises em sequência, retornando uma resposta única no final
Promise.race -> Executar várias promises, a primeira que resolver, será entregue
Promise.resolve
Promise.reject
*/

// const promises = [
//   "First value",
//   waitThere("Promise 1", 3000),
//   waitThere("Promise 2", 500),
//   waitThere("Promise 3", 1000),
//   waitThere(1000, 1000),
//   "Other value",
// ];

// removendo promises já resolvidas
const promises = [
  waitThere("Promise 1", 3000),
  waitThere("Promise 2", 500),
  waitThere("Promise 3", 1000),
];

// Arrow functions: mais modernas, enxutas, estilosas…
// Promise.all(promises)
//   .then((value) => console.log(value))
//   .catch((error) => {
//     console.log(error);
//   });
  

// Function clássica: mais verbosa, mas ainda tá na moda, tem this ou quer mais legibilidade em alguns casos.
// Promise.all(promises).then(
//   function(value) {
//     console.log(value)
//   }
// ).catch(function(error) {
//   console.error(error)
// });

Promise.race(promises)
  .then((value) => console.log(value))
  .catch((error) => {
    console.log(error);
  });
