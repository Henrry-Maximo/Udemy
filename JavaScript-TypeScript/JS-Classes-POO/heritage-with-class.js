class DeviceElectronic {
  constructor(name) {
    this.name = name;
    this.on = false;
  };

  on() {
    if(this.on) {
      console.log(this.name + ` it's on.`);
      return;
    };

    this.name = true;
  };

  off() {
    if(!this.on) {
      console.log(this.name + ` it's off.`);
      return;
    }

    this.on = false;
  };
};

const d1 = new DeviceElectronic('Smartphone');
d1.on();
console.log(d1);