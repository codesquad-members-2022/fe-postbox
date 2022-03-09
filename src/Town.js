import { getRandomNumber } from "./utils.js";
import {
  MAILBOX_PROBABILITY,
  MAILBOX_SIZE,
  MAP_SIZE,
  MARGIN,
  TOWN_SIZE,
} from "./constants.js";

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
    this.mailboxSize = this.getRandomBoolean() ? this.getMailboxSize() : null;
    this.name = null;
  }

  getMailboxSize() {
    return getRandomNumber({
      min: MAILBOX_SIZE.MIN,
      max: MAILBOX_SIZE.MAX,
    });
  }

  getRandomBoolean() {
    return getRandomNumber({ min: 0, max: 10 }) > MAILBOX_PROBABILITY;
  }

  getRandomLocation() {
    return {
      x: getRandomNumber({
        min: MAP_SIZE.MIN,
        max: MAP_SIZE.MAX - TOWN_SIZE.MAX,
      }),
      y: getRandomNumber({
        min: MAP_SIZE.MIN + MARGIN,
        max: MAP_SIZE.MAX - TOWN_SIZE.MAX,
      }),
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
