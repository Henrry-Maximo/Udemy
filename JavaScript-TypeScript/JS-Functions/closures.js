function returnFunction(name) {
  // const user = 'Henrry';

  return function () {
    return user;
  };
}

const funcao = returnFunction('Henrry');
const funcao2 = returnFunction('João');
console.log(funcao); // dir
console.dir(funcao2); // dir