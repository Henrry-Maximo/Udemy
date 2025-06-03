function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject('Error');
      return;
    }

    resolve(msg.toUpperCase() + ' - Passei na promise');
    return;
  }, time);
}

waitThere('Fase 1', rand(0, 3));
