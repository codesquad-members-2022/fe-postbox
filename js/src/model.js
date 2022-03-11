import { getRandomNumber } from '../utility/util.js';
import { check50Percent } from '../utility/util.js';
import { getChildNum } from '../utility/util.js';
export default class Model {
  makeVillage() {
    const village = [];
    let ASCII = 65;

    const getVillageInfo = (width, height, postbox) => {
      const villageInfo = {
        name: String.fromCharCode(ASCII++),
        width: Math.floor(width),
        height: Math.floor(height),
        postbox: postbox,
        child: [],
      };
      if (check50Percent()) {
        this.addChildren(villageInfo, getVillageInfo);
      }
      return villageInfo;
    };

    this.createInitialVillage(getVillageInfo, village);
    return village;
  }

  createInitialVillage(getVillageInfo, village) {
    for (let i = 0; i < 4; i++) {
      village.push(
        getVillageInfo(
          this.getVillageWidth(500),
          this.getVillageHeight(400),
          this.getPostbox()
        )
      );
    }
  }

  addChildren(village, getVillageInfo) {
    let childNum = getChildNum(1, 5);
    for (let i = 0; i < childNum; i++) {
      let villageWidth = this.getVillageWidth(village.width / childNum - 30);
      let villageHeight = this.getVillageHeight(village.height / childNum - 30);
      if (
        (villageWidth > 20 && villageHeight > 40) ||
        (villageWidth > 40 && villageHeight > 20)
      ) {
        village.child.push(
          getVillageInfo(villageWidth, villageHeight, this.getPostbox())
        );
      }
    }
  }

  getVillageWidth(width) {
    let randomWidth = Math.random();
    if (randomWidth < 0.3) randomWidth += 0.3;
    return width * randomWidth;
  }

  getVillageHeight(height) {
    let randomHeight = Math.random();
    if (randomHeight < 0.3) randomHeight += 0.3;
    return height * randomHeight;
  }

  getPostbox() {
    const postbox = {
      size: 0,
      exist: 0,
    };
    if (check50Percent()) {
      postbox.exist++;
      postbox.size = getRandomNumber(9) + 1;
    }
    return postbox;
  }

  getVillage() {
    return this.makeVillage();
  }
}
