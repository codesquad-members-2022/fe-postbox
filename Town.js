import { getRandomNumber, getRandomLocation } from "./utils.js";
import { MAP_SIZE } from "./constants.js";

class Town {
  constructor() {
    this.location = getRandomLocation();
    this.width = getRandomNumber({
      min: 1,
      max: MAP_SIZE.MAX - this.location.x,
    });
    this.height = getRandomNumber({
      min: 1,
      max: MAP_SIZE.MAX - this.location.y,
    });
    this.postOfficeLocation;
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
}

const town = new Town();
