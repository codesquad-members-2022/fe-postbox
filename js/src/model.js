export default class Model {
  constructor() {
    this.village = [];
    this.makeVillage();
  }
  makeVillage() {
    let ASCII = 0;
    const getVillageInfo = (width, height, postbox) => {
      const village = {
        name: String.fromCharCode(ASCII++ + 65),
        width: Math.floor(width),
        height: Math.floor(height),
        postbox: postbox,
        child: [],
      };

      if (this.check50Percent()) {
        this.addChildren(village, getVillageInfo);
      }

      return village;
    };

    this.createInitialVillage(getVillageInfo);
  }

  createInitialVillage(getVillageInfo) {
    for (let i = 0; i < 4; i++) {
      this.village.push(
        getVillageInfo(
          this.getVillageWidth(400),
          this.getVillageHeight(300),
          this.getPostbox()
        )
      );
    }
  }

  addChildren(village, getVillageInfo) {
    let childNum = this.getChildNum(1, 4);
    for (let i = 0; i < childNum; i++) {
      let villageWidth = this.getVillageWidth(village.width / childNum);
      let villageHeight = this.getVillageHeight(village.height / childNum);
      if (villageWidth > 10 && villageHeight > 10) {
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

    if (this.check50Percent()) {
      postbox.exist++;
      postbox.size = Math.floor(Math.random() * 10) + 1;
    }

    return postbox;
  }

  check50Percent() {
    return (Math.round(Math.random() * 10) + 1) % 2;
  }

  getChildNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getVillage() {
    return this.village;
  }
}
