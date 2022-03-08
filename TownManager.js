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
    const curTown = new Town();
    // curTown의 유효성 검사

    // 통과 시 this.towns.push(curToww)
  }

  validation(towns, curTown) {}
}
