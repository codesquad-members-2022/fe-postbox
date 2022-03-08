class Model {
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

      return village;
    };

    this.createInitialVillage(getVillageInfo);
    console.log(this.village);
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
}

const model = new Model();
