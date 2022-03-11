class Village {
  constructor(villageContainer, mapWidth, mapHeight) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.blankSize = 1;
    this.villageContainer = villageContainer;
    this.position = this.getPosition();
    this.townSize = this.getTownSize();
    this.hasChild = false;
  }

  getTownSize() {
    const interval = 10;
    const minSize = 20;

    const [positionX, positionY] = this.position;
    let minWidth = this.mapWidth;
    let minHeight = this.mapHeight;
    this.villageContainer.forEach(({ townSize }) => {
      const { x, y } = townSize;
      const [existX] = x;
      const [existY] = y;

      if (positionX < existX && minWidth > existX) {
        minWidth = existX;
      }

      if (positionY < existY && minHeight > existY) {
        minHeight = existY;
      }
    });

    const newWidth = this.getRandomNum(
      minWidth - positionX - interval,
      minSize
    );
    const newHeight = this.getRandomNum(
      minHeight - positionY - interval,
      minSize
    );
    return {
      x: [positionX, newWidth],
      y: [positionY, newHeight],
    };
  }

  getPosition() {
    const interval = 100;

    const newX = this.getRandomNum(this.mapWidth - 1, 1);
    const newY = this.getRandomNum(this.mapHeight - 1, 1);

    for (const { townSize } of this.villageContainer) {
      const { x, y } = townSize;
      const [minX, maxX] = x;
      const [minY, maxY] = y;

      const isInsideBox =
        minX - 5 <= newX &&
        newX <= minX + maxX + 5 &&
        minY - 5 <= newY &&
        newY <= minY + maxY + 5;

      if (isInsideBox) {
        return this.getPosition();
      }
    }
    return [newX, newY];
  }

  getRandomNum(maxNum, minNum) {
    return Math.floor(Math.random() * maxNum) + minNum;
  }
}

export default Village;
