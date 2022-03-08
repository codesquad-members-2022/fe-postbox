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

  addTown() {
    const town2 = new Town();
    // town2의 유효성 검사

    // 통과 시 this.towns.push(curToww)
  }

  validateTown(town2) {
    // this.towns 순회한다.
    // 현재타운 x, y

    this.towns.every((town) => {});
  }

  isOverlap(townLoca1, townLoca2) {
    // const townLoca1 = this.get4location(town1);
    // const townLoca2 = this.get4location(town2);

    // 안에 있는지 체크
    const isInner = this.checkInside(townLoca1, townLoca2);
    // 밖에 있는지 체크
    const isOutter = this.checkOutside(townLoca1, townLoca2);
    return !isInner && !isOutter
  }

  checkInside(baseTown, checkTown) {
    for (let key in checkTown) {
      const point = checkTown[key]
      const checkX = point[0] > baseTown.p1[0] && point[0] < baseTown.p2[0];
      const checkY = point[1] > baseTown.p1[1] && point[1] < baseTown.p3[1];
      if (!checkX || !checkY) {
        return false;
      }
    }
    return true;
  }

  checkOutside(baseTown, checkTown) {
    for (let key in checkTown) {
      const point = checkTown[key]
      const checkX = point[0] < baseTown.p1[0] || point[0] > baseTown.p2[0];
      const checkY = point[1] < baseTown.p1[1] || point[1] > baseTown.p3[1];
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

const manager = new TownManager();
const town1 = {
  p1: [0, 0],
  p2: [10, 0],
  p3: [0, 10],
  p4: [10, 10]
}
const town2 = {
  p1: [1, 1],
  p2: [5, 1],
  p3: [1, 5],
  p4: [5, 5]
}
const town3 = {
  p1: [0, 0],
  p2: [5, 0],
  p3: [0, 12],
  p4: [5, 12]
}
const town4 = {
  p1: [-1, -1],
  p2: [12, -1],
  p3: [-1, 12],
  p4: [12, 12]
}

console.log(manager.isOverlap(town1, town2))
console.log(manager.isOverlap(town1, town3))
console.log(manager.isOverlap(town1, town4))
console.log(manager.isOverlap(town3, town4))
