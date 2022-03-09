import { range } from '../utils/utils.js';

export class Village {
  constructor({ name, width, height, parent }) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.parent = null;
    this.children = [];
    this.postbox = null;
    this.initPostbox();
  }

  initChildren() {
    //자식 마을은 1개 혹은 2개
    //마을의 크기는 100부터 1/2 width까지
    //높이는 50부터 1/2 height까지
    //width가 200보다 작거나, height가 100보다 작으면 child를 생성하지 않음
    const count = range(1, 3);
    for (let i = 0; i < count; i++) {}
  }

  toJSON() {
    const { name, width, height, parent, children, postbox } = this;
    return { name, width, height, parent, children, postbox };
  }

  initPostbox() {
    const chance = range(0, 101);
    if (chance < 20) {
      const size = range(1, 1000);
      this.postbox = { exist: true, size: size };
    }
  }
}

export class RootVillage extends Village {
  constructor({ props, sectionWidth, sectionHeight }) {
    super(props);
    this.xPos = null;
    this.yPos = null;
    this.sectionWidth = sectionWidth;
    this.sectionHeight = sectionHeight;
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
