function displayTime() {
  let data = new Date();

  return data.toLocaleDateString('pt-BR', {
    hour12: false
  });
}

function funcOfInterval() {
  console.log(displayTime());
}

console.log(displayTime());
setInterval(funcOfInterval, 1000);

// function anousnymous
setInterval(function () {
  console.log(displayTime())
}, 1000)

const timer = setInterval(function () {
  console.log(displayTime())
}, 1000)

// execution only a once
setTimeout(function() {
  clearInterval(timer);
}, 10000)

setTimeout(function() {
  console.log('Hello!');
}, 50000)