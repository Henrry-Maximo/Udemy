// Factory Function (função fábrica)
// Constructor function (constructor function)
// When a function it within of a object is called method
function createPerson(name, surname, height, weight) {
  return {
    name,
    surname,

    get nameComplete() {
      return `${this.name} ${this.surname}`;
      // return `${this.nome} ${this.surname}`;
    },

    // becomes an attribute of my object / not function
    set nameComplete(value) {
      // console.log(value); // string
      value = value.split(" ");
      // console.log(value); // array
      this.name = value.shift();
      // console.log(`removing first element: ${value}`);
      this.surname = value.join(" ");
      // console.log(value);
      // console.log(value); // vetor
      // console.log(value);
    },

    // say: function (thema) {
    //   return `${name} está ${thema} , ${this.peso}`;
    // },

    say(thema = "saying about nothing") {
      return `${this.name} está ${thema} , ${this.peso}`;
    },

    height: height,
    peso: weight,

    // imc() {
    //   const indice = this.peso / (this.height ** 2);
    //   return indice.toFixed(2);
    // }

    // Getter lonely = Attribute
    get imc() {
      const indice = this.peso / this.height ** 2;
      return indice.toFixed(2);
    },
  };
}

// const p1 = createPerson("Henrry", "Maximo", 1.8, 80);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.imc);
// console.log(p1.name + ' ' + p1.surname);
// console.log(p1.nameComplete);

// p1.nameComplete = "Henrry Maximo Lima";
// console.log(p1.nameComplete);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.say());
// console.log(p1.name, p1.surname);
// console.log(p1.say("Saying about JS."));
// const p2 = createPerson("Test", "Test");
// console.log(p2.say("Saying about JS."));

const p1 = createPerson("Luiz", "Otávio", 1.8, 80);
const p2 = createPerson("Luiz", "Otávio", 1.90, 57);
const p3 = createPerson("Luiz", "Otávio", 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);