import { convertStringToHTML, getRandomNumber } from "./util/util.js";
import { MAX, MIN } from "./constants.js";
import { Town } from "./town.js";
import { getElementByClassName } from "./util/dom-lib.js";

export class DataGenerator {
  constructor() {
    this.ASCII = 65;
  }

  createTownData(depth = 1) {
    const townWidth = getRandomNumber(
      MIN.WIDTH + (depth >= 3 ? depth * 10 : 0),
      MAX.WIDTH
    );
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
      grid: {
        row: getRandomNumber(0, 4),
        column: getRandomNumber(0, 4),
      },
      children: this.createChildren(depth),
    };
  }

  createChildren(depth) {
    if (++depth >= 4) return [];

    let childrenCount =
      depth === 3 ? 1 : getRandomNumber(MIN.CHILDREN, MAX.CHILDREN);

    let children = Array.from({ length: childrenCount }).map(() =>
      this.createTownData(depth)
    );

    return children;
  }
  static createTownNode(data) {
    const town = convertStringToHTML(new Town(data).template());
    const mailbox = getElementByClassName("mailbox", town);

    Town.setTownStyle(town, {
      width: `${data.size.width}%`,
      height: `${data.size.height}%`,
      top: `${data.position.top}%`,
      left: `${data.position.left}%`,
    });

    mailbox &&
      Town.setTownStyle(mailbox, {
        fontSize: `${data.mailbox.size * 5}px`,
      });

    for (let i = 0; i < data.children.length; i++) {
      const child = DataGenerator.createTownNode(data.children[i]);
      town.append(child);
    }

    return town;
  }
}
