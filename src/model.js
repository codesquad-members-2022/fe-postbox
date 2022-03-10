import { getRandom } from './util.js';

class Town {
  constructor() {
    this.name = this.getTownName();
    this.postBox = this.getPostBoxInfo();
    this.child = [];
  }

  getTownName() {
    let townName = '';
    const NAME_LENGTH = 3;
    for (let i = 0; i < NAME_LENGTH; i++) {
      const MAX_UPPER_ASCII = 90;
      const MIN_UPPER_ASCII = 65;
      townName += String.fromCharCode(getRandom(MAX_UPPER_ASCII, MIN_UPPER_ASCII));
    }
    return townName;
  }

  getPostBoxInfo() {
    const postBoxInfo = {};

    const BOOLEAN_RANGE = 1;
    const hasPostBox = getRandom(BOOLEAN_RANGE);
    const numToBoolean = Boolean(hasPostBox);

    const MAX_SIZE = 30;
    const MIN_SIZE = 1;
    const randomSize = getRandom(MAX_SIZE, MIN_SIZE);

    postBoxInfo['hasPostBox'] = numToBoolean;
    numToBoolean ? (postBoxInfo['size'] = randomSize) : '';

    return postBoxInfo;
  }

  addChildTown() {
    const MAX_CHILD_TOWN = 3;
    const MIN_CHILD_TOWN = 0;
    const randomChildTown = getRandom(MAX_CHILD_TOWN, MIN_CHILD_TOWN);

    for (let i = 0; i < randomChildTown; i++) {
      this.child.push(new Town());
    }
  }
}

export class Map {
  constructor() {
    this.townList = [];
  }

  randomCreateTown() {
    // 2 ~ 4개 생성
    const CREATE_TOWN_MAX = 5;
    const CREATE_TOWN_MIN = 2;
    const randomCreateTown = getRandom(CREATE_TOWN_MAX, CREATE_TOWN_MIN);

    for (let i = 0; i < randomCreateTown; i++) {
      const newTown = new Town();
      newTown.addChildTown();
      newTown.child.forEach((child) => child.addChildTown());
      this.townList.push(newTown);
    }
  }
}
