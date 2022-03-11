import Village from "../model/village.js";

class Controller {
  constructor(mapWidth, mapHeight) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.villageContainer = [];
    this.villageCount = null;
    this.parentVillages = [];
    this.childVillages = [];
  }

  getRandomVillageCount() {
    const NUM = 3;
    return Math.floor(Math.random() * NUM) + 1;
  }

  createVillages(villageContainer, maxWidth, maxHeight) {
    villageContainer = new Array(this.villageCount)
      .fill("")
      .map(() => new Village(villageContainer, maxWidth, maxHeight));

    return villageContainer;
  }

  initService() {
    this.villageCount = this.getRandomVillageCount();
    const defaultMapSize = 600;
    this.parentVillages = this.createVillages(
      this.parentVillages,
      defaultMapSize,
      defaultMapSize
    );
    this.parentVillages.forEach(({ townSize }) =>
      this.villageContainer.push(townSize)
    );

    this.selectParent();

    this.createChildVillage();
  }

  selectParent() {
    this.parentVillages.forEach((parent) => {
      const { townSize } = parent;
      const {
        x: [, width],
        y: [, height],
      } = townSize;

      const area = width * height;
      const maxArea = 4000;
      if (area > maxArea) {
        parent.hasChild = true;
      }
    });
  }

  createChildVillage() {
    this.parentVillages.forEach((parent) => {
      const { townSize } = parent;

      if (parent.hasChild) {
        const {
          x: [parentPositionX, parentWidth],
          y: [parentPositionY, parentHeight],
        } = townSize;

        this.createVillages(this.childVillages, parentWidth, parentHeight);

        this.childVillages.forEach(({ townSize }) => {
          const {
            x: [childPositionX, childWidth],
            y: [childPositionY, childHeight],
          } = townSize;

          this.villageContainer.push({
            x: [parentPositionX + childPositionX, childWidth],
            y: [childPositionY + parentPositionY, childHeight],
          });
          this.childVillages = [];
        });
      }
    });
  }
}

export default Controller;
