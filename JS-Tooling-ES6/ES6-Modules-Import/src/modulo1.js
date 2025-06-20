export const name = 'Henrry';
export const surname = 'Maximo';
export const cpf = '23131231414';

// const name = 'Henrry';
// const surname = 'Maximo';
// const cpf = '23131231414';

const age = 21;

// function sum(x, y) {
//   return x + y;
// }
export default function sum(x, y) {
  return x + y;
}

// const, function and class
export class Pessoa {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

export { surname as surnameFromModule, age, sum };