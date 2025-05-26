class DeviceElectronic {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  on() {
    if (this.on) {
      console.log(this.name + ` it's on.`);
      return;
    }

    this.name = true;
  }

  off() {
    if (!this.on) {
      console.log(this.name + ` it's off.`);
      return;
    }

    this.on = false;
  }
}

// const d1 = new DeviceElectronic('Smartphone');
// d1.on();
// console.log(d1);

class Smartphone extends DeviceElectronic {
  constructor(name, cor, model) {
    super(name); // call constructor of class father
    // Mandatory: is necessary use super when exists constructor in class father
    // Warning: you can do extend of class how many times you want, but will be
    // have a codebase coupled

    this.cor = cor;
    this.model = model;
  }
}

class Tablet extends DeviceElectronic {
  constructor(name, haveWifi) {
    super(name);
    
    this.haveWifi = haveWifi;
  };

  on() {
    console.log("See, you change the method on.");
  };

  sayHello() {
    console.log("Hello");
  };
}

const s1 = new Smartphone("Iphone", "Black", "Galaxy S10");
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1.on);
