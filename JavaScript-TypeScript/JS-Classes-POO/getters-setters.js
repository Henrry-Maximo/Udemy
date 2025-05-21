const _velocity = Symbol('velocity');
class Car {
  constructor(name, velocity) {
    this.name = name;
    // this.velocity = 0;
    this[_velocity] = 0;
  }

  get velocity() {

  }

  accelerate() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  };

  break() {
    if (this[_velocity] <= 100) return;
    this[_velocity]--;
  };
};

const c1 = new Car('Fusca');
for(let i = 0; i <= 200; i++) {
  c1.accelerate();
};

c1.velocity = 1500;
console.log(c1.velocity);