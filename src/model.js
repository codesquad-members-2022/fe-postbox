import { townNameList } from './data/townNameList.js';

class Town {
  constructor() {
    this.childTown = this.randomChildTown();
    this.hasPostBox = this.randomPostBox();
  }

  getRandom(max, min) {
    return min === undefined ? Math.round(Math.random() * max) : Math.floor(Math.random() * (max - min) + min);
  }

  randomChildTown() {
    const MAX_CHILD_TOWN = 5;
    const MIN_CHILD_TOWN = 1;
    return this.getRandom(MAX_CHILD_TOWN, MIN_CHILD_TOWN);
  }

  randomPostBox() {
    const MAX_POSTBOX = this.childTown;
    const random = this.getRandom(MAX_POSTBOX);
    return random;
  }
}

export class Map {
  constructor() {
    this.townList = [];
    this.townNameData = townNameList;
  }

  randomCreateTown() {
    // 2 ~ 4개 생성
    const CREATE_TOWN_MAX = 5;
    const CREATE_TOWN_MIN = 2;
    const random = Math.floor(Math.random() * (CREATE_TOWN_MAX - CREATE_TOWN_MIN) + CREATE_TOWN_MIN);

    for (let i = 0; i < random; i++) {
      const newTown = new Town();
      newTown.childTown = this.townNameData.splice(0, newTown.childTown);
      this.townList.push(newTown);
    }
  }
}
