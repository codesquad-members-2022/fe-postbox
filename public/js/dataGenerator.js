import { getRandomNumber } from "./util/util.js";
import { MAX, MIN } from "./constants.js";

export class DataGenerator {
  constructor() {
    this.ASCII = 65;
  }

  createTownData(depth = 1) {
    const townWidth = getRandomNumber(MIN.WIDTH, MAX.WIDTH);
    const townHeight = getRandomNumber(MIN.HEIGHT, MAX.HEIGHT);
    return {
      name: String.fromCharCode(this.ASCII++),
      size: {
        width: townWidth,
        height: townHeight,
      },
      position: {
        left: getRandomNumber(MIN.POSITION, MAX.WIDTH - townWidth),
        top: getRandomNumber(MIN.POSITION, MAX.HEIGHT - townHeight),
      },
      mailbox: {
        size: getRandomNumber(MIN.MAILBOX_SIZE, MAX.MAILBOX_SIZE),
        isExist: getRandomNumber(MIN.MAILBOX_EXIST, MAX.MAILBOX_EXIST),
      },
      children: this.createChildren(depth),
    };
  }

  createChildren(depth) {
    if (++depth >= 4) return [];

    let childrenCount = getRandomNumber(MIN.CHILDREN, MAX.CHILDREN);

    let children = Array.from({ length: childrenCount }).map(() =>
      this.createTownData(depth)
    );

    return children;
  }
}

const datagenerator = new DataGenerator();
const data = datagenerator.createTownData();
console.log(data);
