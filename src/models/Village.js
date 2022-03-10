const { range } = require('../utils/utils.js');

class Village {
  static nameList;

  static initNameList() {
    Village.nameList = Array.from({ length: 26 }).map((_, idx) =>
      String.fromCodePoint(idx + 65)
    );
  }

  constructor({ width, height, parent = null }) {
    this.name = null;
    this.width = width;
    this.height = height;
    this.children = [];
    this.postbox = { exist: false };
    this.initName();
    this.initPostbox();
    this.initChildren();
  }

  initChildren() {
    //name, width, height
    //자식 마을은 1개 혹은 2개
    //마을의 크기는 100부터 1/2 width까지
    //높이는 50부터 1/2 height까지
    //width가 100보다 작거나, height가 50보다 작으면 child를 생성하지 않음
    const count = range(1, 3);
    for (let i = 0; i < count; i++) {
      if (this.width <= 150 || this.height <= 150) break;
      const width = range(100, (this.width / 2) >> 0);
      const height = range(100, (this.height / 2) >> 0);
      this.children.push(new Village({ width, height, parent: this }));
    }
  }

  toObject() {
    return { ...this };
  }

  initPostbox() {
    const chance = range(0, 101);
    if (chance < 20) {
      const size = range(1, 1000);
      this.postbox.exist = true;
      this.postbox.size = size;
      return;
    }
  }

  initName() {
    const index = range(0, Village.nameList?.length);
    this.name = Village.nameList.splice(index, 1)[0];
  }
}

class RootVillage extends Village {
  constructor({ props, sectionWidth, sectionHeight }) {
    super(props);
    this.xPos = null;
    this.yPos = null;
    this.sectionWidth = sectionWidth;
    this.sectionHeight = sectionHeight;
    this.initPos();
  }

  initPos() {
    //sectionWidth와 height 참고해서 생성
    //xPon 0~(sectionWidth-width)
    //yPon 0~(sectionHeight-height)
    const { width, height, sectionWidth, sectionHeight } = this;
    const xPos = range(0, sectionWidth - width);
    const yPos = range(0, sectionHeight - height);
    this.xPos = xPos;
    this.yPos = yPos;
  }
}

module.exports = {
  RootVillage,
  Village,
};
