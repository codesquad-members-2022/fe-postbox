import { RECYCLE_NUMBER, MARGIN } from "./constants.js";
import { Town } from "./Town.js";
import { getRandomNumber } from "./utils.js";

class TownManager {
  constructor() {
    this.towns = [];

    console.log(document.querySelector('.name'))
  }

  makeTowns() {
    Array.from({ length: RECYCLE_NUMBER }).forEach(() => {
      this.addTown();
    });
  }

  setNames() {
    this.towns.forEach((town, i) => {
      const name = String.fromCharCode(65 + i);
      town.nameTown(name);
    });
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
    const townLoca1 = this.getCoordinates(town1);
    const townLoca2 = this.getCoordinates(town2);
    const isInner = this.checkInside(townLoca1, townLoca2);
    const isOutter = this.checkOutside(townLoca1, townLoca2);
    return !isInner && !isOutter;
  }

  checkOutside(baseTown, checkTown) {
    for (let key in checkTown) {
      const point = checkTown[key];
      const checkX =
        point[0] < baseTown.p1[0] - MARGIN ||
        point[0] > baseTown.p2[0] + MARGIN;
      const checkY =
        point[1] < baseTown.p1[1] - MARGIN ||
        point[1] > baseTown.p3[1] + MARGIN;
      if (!checkX || !checkY) {
        return false;
      }
    }
    return true;
  }

  checkInside(baseTown, checkTown) {
    for (let key in checkTown) {
      const point = checkTown[key];
      const checkX =
        point[0] > baseTown.p1[0] + MARGIN &&
        point[0] < baseTown.p2[0] - MARGIN;
      const checkY =
        point[1] > baseTown.p1[1] + MARGIN &&
        point[1] < baseTown.p3[1] - MARGIN;
      if (!checkX || !checkY) {
        return false;
      }
    }
    return true;
  }

  getCoordinates(town) {
    return {
      p1: [town.location.x, town.location.y],
      p2: [town.location.x + town.width, town.location.y],
      p3: [town.location.x, town.location.y + town.height],
      p4: [town.location.x + town.width, town.location.y + town.height],
    };
  }
}

export { TownManager };
