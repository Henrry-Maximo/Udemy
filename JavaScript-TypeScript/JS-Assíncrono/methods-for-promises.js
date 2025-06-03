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
Promise.all 
  -> Executar várias promises em sequência, retornando uma resposta única no final
  se uma falhar, todas seram rejeitadas
Promise.race -> Executar várias promises, a primeira que resolver, será entregue
Promise.resolve -> Retornar uma Promise sabendo que o valor já é verdadeiro, mantendo o
retorno padronizado (fica tranquilo, tá tudo certo, já tá resolvido.)
Promise.reject -> Rejeita a Promise, caindo no catch
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

// Promise.race(promises)
//   .then((value) => console.log(value))
//   .catch((error) => {
//     console.log(error);
//   });

function downloadPage() {
  const onCache = true;

  // if (!onCache) {
  //   return waitThere('Download page', 3000);
  // }

  // if (onCache) {
  //   return Promise.resolve('Page on cache.');
  // } else {
  //   return waitThere('Download page', 3000);
  // }

  if (onCache) {
    return Promise.reject('Page on cache.');
  } else {
    return waitThere('Download page', 3000);
  }

  // return Promise.resolve('Page on cache.');
}

downloadPage().then(dataPage => {
  console.log(dataPage)
}).catch(e => console.log('Erro', e));
