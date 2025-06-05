function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Error");
        return;
      }

      resolve(msg.toUpperCase() + " - Passed in Promise");
      return;
    }, time);
  });
}

// return a promise
// waitThere("Fase 1", rand(0, 3))
//   .then((value) => {
//     // code here
//     console.log(value);
//     return waitThere("Fase 2", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return waitThere('Fase 3', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase
//   })
//   .then(fase => {
//     console.log('Finished in fase', fase);
//   })
//   .catch(e => console.log(e));

// .catch((err) => {
//    console.log(err);
//  });

async function execute() {
  const fase1 = await waitThere('Fase 1', rand()); // aguarda a resolução da chamada
  console.log('Finished at fase: ', fase1);
  
  const fase2 = await waitThere('Fase 2', rand());
  console.log('Finished at fase: ', fase2);

  const fase3 = await waitThere('Fase 3', rand());
  console.log('Finished at fase: ', fase3);

  console.log('Finished at fase: ', fase3);
}

execute();