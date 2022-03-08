import { getRandomNumber, getRandomLocation } from "./utils.js";
import { TOWN_SIZE } from "./constants.js";

class Town {
  constructor() {
    this.location = getRandomLocation();
    this.width = getRandomNumber({
      min: TOWN_SIZE.MIN,
      max: TOWN_SIZE.MAX,
    });
    this.height = getRandomNumber({
      min: TOWN_SIZE.MIN,
      max: TOWN_SIZE.MAX,
    });
    this.mailBox;
    this.name = null;
  }

  getReferencePoint() {
    return this.location;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  nameTown(name) {
    this.name = name;
  }
}

export { Town };
