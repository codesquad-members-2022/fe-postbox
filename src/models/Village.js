export class Village {
  constructor({ name, width, height, parent }) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.parent = null;
    this.children = [];
    this.postbox = { exist: false, size: 100 };
  }

  initChildren() {
    //자식 마을은 1개 혹은 2개
    //마을의 크기는 100부터 1/2 width까지
    //높이는 50부터 1/2 height까지
    //width가 200보다 작거나, height가 100보다 작으면 child를 생성하지 않음
  }

  toJSON() {
    const { name, width, height, parent, children, postbox } = this;
    return { name, width, height, parent, children, postbox };
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
    //yPon 0~(sectionHHeight-height)
  }
}

// Village 공통적인

// tl[1 2 3 4 5 6]
// tr[7 8 9]
// bl[a b c]
// br[d e f]

// tl tr bl br
