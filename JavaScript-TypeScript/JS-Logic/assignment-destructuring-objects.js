const person = {
  name: 'Henrry',
  surname: 'Máximo',
  age: 21,
  address: {
    street: 'Rua Avenidade Brasil',
    number: 320
  }
};

// const { name: user = '', surname, age } = person; // atribuição via desestruturação
// console.log(`Destruturação: ${user}, ${surname}, ${age} `);
// console.log(Object.entries(user));

// const nameUser = person.name; // atribuição
// console.log(`Atribuição normal: ${nameUser}`)
// console.log(person.name);

// const { address } = person;
// const { address: { street: s = '', number }, address } = person;
// console.log(s, number)
// console.log(address); // { street: 'Rua Avenidade Brasil', number: 320 }

const { name, surname, ...rest } = person;
console.log(rest);
