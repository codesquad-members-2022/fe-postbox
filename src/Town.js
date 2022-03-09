import { getRandomNumber } from "./utils.js";
import { MAP_SIZE, TOWN_SIZE } from "./constants.js";

class Town {
  constructor() {
    this.location = this.getRandomLocation();
    this.width = getRandomNumber({
      min: TOWN_SIZE.MIN,
      max: TOWN_SIZE.MAX,
    });
    this.height = getRandomNumber({
      min: TOWN_SIZE.MIN,
      max: TOWN_SIZE.MAX,
    });
    this.mailBox = this.getRandomBoolean();
    this.name = null;
  }

  getRandomBoolean() {
    return getRandomNumber({ min: 0, max: 10 }) > 7;
  }

  getRandomLocation() {
    return {
      x: getRandomNumber({ min: MAP_SIZE.MIN, max: MAP_SIZE.MAX }),
      y: getRandomNumber({ min: MAP_SIZE.MIN, max: MAP_SIZE.MAX }),
    };
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
