// Factory Function (função fábrica)
// Constructor function (constructor function)
// When a function it within of a object is called method
function createPerson(name, surname, height, weight) {
  return {
    name,
    surname,
    // say: function (thema) {
    //   return `${name} está ${thema} , ${this.peso}`;
    // },
    say(thema) {
      return `${this.name} está ${thema} , ${this.peso}`;
    },
    height: height,
    peso: weight,

    get nameComplete() {
      return `${this.nome} ${this.surname}`;
      // return `${this.nome} ${this.surname}`;
    },

    // imc() {
    //   const indice = this.peso / (this.height ** 2);
    //   return indice.toFixed(2);
    // }
    // 

    // becomes an attribute of my object / not function
    // Getter
    get imc() {
      const indice = this.peso / (this.height ** 2);
      return indice.toFixed(2);
    },

    set nameComplete(value) {
      valor = valor.split(' ');
      this.name = valor.shift();
      this.surname = valor.join();
      console.log(valor); // vetor
      // console.log(value);
    }
  };
}

const p1 = createPerson("Henrry", "Maximo", 1.8, 80);
console.log(p1.name);
console.log(p1.surname);
console.log(p1.imc);
console.log(p1.name + ' ' + p1.surname);
console.log(p1.nameComplete);

p1.nameComplete('Henrry Maximo Lima');
console.log(p1.nameComplete);
console.log(p1.name, p1.surname);
// console.log(p1.say("Saying about JS."));
// const p2 = createPerson("Test", "Test");
// console.log(p2.say("Saying about JS."));
