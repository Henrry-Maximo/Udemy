const _velocity = Symbol('velocity');
class Car {
  constructor(name) {
    this.name = name;
    // this.velocity = 0;
    this[_velocity] = 0;
  }

  set velocity(value) {
    console.log(`\nSETTER:`);
    if(typeof value !== 'number') return;
    if(value >= 100 || value <= 0) return;

    this[_velocity] = value;
  }

  get velocity() {
    console.log(`\nGETTERS:`);
    return this[_velocity];
  }

  accelerate() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  };

  break() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  };
};

const c1 = new Car('Fusca');
for(let i = 0; i <= 55; i++) {
  c1.accelerate();
};


console.log(c1);
// c1.velocity = 55; // SETTERS
console.log(c1.velocity); // GETTERS