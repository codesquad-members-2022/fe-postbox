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

    const newWidth =
      Math.floor(Math.random() * (minWidth - positionX - 10)) + 1;
    const newHeight =
      Math.floor(Math.random() * (minHeight - positionY - 10)) + 1;

    return {
      x: [positionX, newWidth],
      y: [positionY, newHeight],
    };
  }

  getPosition() {
    const newX = Math.floor(Math.random() * (this.mapWidth - 1)) + 1;
    const newY = Math.floor(Math.random() * (this.mapHeight - 1)) + 1;

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
}

export default Village;
