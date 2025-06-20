// not necessary use .js
import { name as nameFroModule, surnameFromModule, age, sum, Pessoa as OtherSomething } from './modulo1';
import soma from './modulo1';

import * as MyModule from './modulo1';
console.log(MyModule);

// const name = 'Henrry';

const p1 = new OtherSomething('Henrry 2', 'Maximo 2');
console.log(p1);

console.log(nameFroModule, surnameFromModule, age);

console.log(sum(5, 10));
console.log(soma(20, 5));

// export default (x, y) => x * y;

// export { name as default, surname, age, sum };