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
    imc() {
      const indice = this.peso / (this.height ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = createPerson("Henrry", "Maximo", 1.8, 80);
console.log(p1);
console.log(p1.say("Saying about JS."));
const p2 = createPerson("Test", "Test");
console.log(p2.say("Saying about JS."));
