class ControllerRemote {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  };

  // methods of instance
  increaseVolume() {
    this.volume += 2;
  };

  toDecrease() {
    this.volume -= 2;
  };

  // methods of statics
  static exchangedBattery() {
    console.log("Ok, will echanged a battery.")
  }

  static sum(x, y) {
    return x + y;
  }
};

const controllerOne = new ControllerRemote('LG');
controllerOne.increaseVolume();
controllerOne.increaseVolume();
controllerOne.increaseVolume();
console.log(controllerOne);

ControllerRemote.exchangedBattery();
console.log(ControllerRemote.sum(2, 4));