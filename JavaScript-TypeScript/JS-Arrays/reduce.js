// altered all elements or some of you array original, use map
// if you it needs filter the array, use filter
// if you it needs reduce the array by one element, use reduce

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callback
const total = numbers.reduce(function(acumulador, valor, indice, array) {
  // acumulador.push(valor * 2);

  // if (valor % 8 === 0) acumulador.push(valor);
  // if (valor % 2 !== 0) acumulador.push(valor);
  // if (valor % 2 === 0) acumulador.push(valor);

  // if (valor % 2 === 0) acumulador += valor;
  if (valor % 2 === 0) {
    acumulador += valor;
  };

  // acumulador += valor;
  // acumulador = acumulador + valor;
  console.log(acumulador); // initial 0
  console.log(acumulador, valor);

  return acumulador;
}, 0); // 0 or [] or first element of array

console.log(total); // 236


// Return a person more old
const persons = [
  {
    nome: 'Luiz', idade: 62
  },
  {
    nome: 'Maria', idade: 23
  },
  {
    nome: 'Eduardo', idade: 105
  },
  {
    nome: 'Letícia', idade: 10
  },
  {
    nome: 'Rosana', idade: 64
  },
  {
    nome: 'Wallace', idade: 1000
  },
];
const moreOld = persons.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(moreOld);
