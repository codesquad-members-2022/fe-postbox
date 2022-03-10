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
      if (this.check50Percent()) {
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
          this.getVillageWidth(400),
          this.getVillageHeight(300),
          this.getPostbox()
        )
      );
    }
  }
  addChildren(village, getVillageInfo) {
    let childNum = this.getChildNum(1, 5);
    for (let i = 0; i < childNum; i++) {
      let villageWidth = this.getVillageWidth(village.width / childNum);
      let villageHeight = this.getVillageHeight(village.height / childNum);
      if (villageWidth > 10 && villageHeight > 5) {
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
    if (this.check50Percent() && this.check50Percent()) {
      postbox.exist++;
      postbox.size = this.getRandomNumber(9);
    }
    return postbox;
  }
  getRandomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  check50Percent() {
    return (Math.round(Math.random() * 10) + 1) % 2;
  }
  getChildNum(min, max) {
    return this.getRandomNumber(max - min) + min;
  }
  getVillage() {
    return this.makeVillage();
  }
}
