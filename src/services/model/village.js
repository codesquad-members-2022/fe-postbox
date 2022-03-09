class Village {
  constructor(villageContainer, mapSize) {
    this.mapSize = mapSize;
    this.blankSize = 1;
    this.villageContainer = villageContainer;
    this.position = this.getPosition();
    this.townSize = this.getTownSize();
  }

  getTownSize() {
    const [positionX, positionY] = this.position;

    let minWidth = this.mapSize;
    let minHeight = this.mapSize;
    this.villageContainer.forEach(({ x, y }) => {
      const [existX] = x;
      const [existY] = y;

      if (positionX < existX && minWidth > existX) {
        minWidth = existX;
      }

      if (positionY < existY && minHeight > existY) {
        minHeight = existY;
      }
    });

    const newWidth =
      Math.floor(Math.random() * (minWidth - positionX - this.blankSize)) + 1;
    const newHeight =
      Math.floor(Math.random() * (minHeight - positionY - this.blankSize)) + 1;

    return {
      x: [positionX, newWidth],
      y: [positionY, newHeight],
    };
  }

  getPosition() {
    const newX =
      Math.floor(Math.random() * (this.mapSize - this.blankSize)) + 1;
    const newY =
      Math.floor(Math.random() * (this.mapSize - this.blankSize)) + 1;
    for (const { x, y } of this.villageContainer) {
      const [minX, maxX] = x;
      const [minY, maxY] = y;

      const isInsideBox =
        minX < newX && newX < minX + maxX && minY < newY && newY < minY + maxY;

      if (isInsideBox) {
        this.getPosition();
      }
    }
    return [newX, newY];
  }
}

export default Village;
