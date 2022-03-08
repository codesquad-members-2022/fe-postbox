import { RECYCLE_NUMBER } from "./constants.js";
import { Town } from "./Town.js";
import { getRandomNumber } from "./utils.js";

class TownManager {
  constructor() {
    this.towns = [];
    // TODO: min, max 모듈화시킬지 고민.
    this.townNumber = getRandomNumber({ min: 1, max: 10 });
    this.postOfficeNumber = getRandomNumber({
      min: 1,
      max: this.townNumber - 1,
    });
  }

  makeTowns() {
    Array.from({ length: RECYCLE_NUMBER }).forEach(() => this.addTown());
  }

  addTown() {
    const town = new Town();
    if (!this.towns.length) {
      this.towns.push(town);
      return;
    }
    if (this.validateTown(town)) {
      this.towns.push(town);
    }
  }

  validateTown(targetTown) {
    return this.towns.every((town) => {
      return !this.isOverlap(town, targetTown);
    });
  }

  isOverlap(town1, town2) {
    const townLoca1 = this.get4location(town1);
    const townLoca2 = this.get4location(town2);

    // 안에 있는지 체크
    const isInner = this.checkInside(townLoca1, townLoca2);
    // 밖에 있는지 체크
    const isOutter = this.checkInside(townLoca2, townLoca1);
    return !isInner && !isOutter;
  }

  checkInside(baseTown, checkTown) {
    for (let key in checkTown) {
      const point = checkTown[key];
      const checkX = point[0] > baseTown.p1[0] && point[0] < baseTown.p2[0];
      const checkY = point[1] > baseTown.p1[1] && point[1] < baseTown.p3[1];
      if (!checkX || !checkY) {
        return false;
      }
    }
    return true;
  }

  get4location(town) {
    const x1 = town.location.x;
    const y1 = town.location.y;
    const x2 = x1 + town.width;
    const y2 = y1;
    const x3 = x1;
    const y3 = y1 + town.height;
    const x4 = x2;
    const y4 = y3;

    return {
      p1: [x1, y1],
      p2: [x2, y2],
      p3: [x3, y3],
      p4: [x4, y4],
    };
  }
}

export { TownManager }