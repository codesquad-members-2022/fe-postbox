class Village {
  constructor(grade, xPos, yPos) {
    this.size = { grade, width: null, height: null }; //1~6
    this.xPos = null;
    this.yPos = null;
    this.initSize();
  }

  initSize() {
    const { grade } = this.size;
    const { width, height } = villageSize[grade];
    this.size.width = width;
    this.size.height = height;
  }

  setPos(pos) {}
}

const villageSize = {
  1: { width: 200, height: 200 },
  2: { width: 260, height: 210 },
  3: { width: 320, height: 220 },
  4: { width: 380, height: 230 },
  5: { width: 440, height: 240 },
  6: { width: 500, height: 250 },
};

export default Village;

// Village 공통적인

// tl[1 2 3 4 5 6]
// tr[7 8 9]
// bl[a b c]
// br[d e f]

// tl tr bl br
