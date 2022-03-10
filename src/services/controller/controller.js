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
    const NUM = 10;
    return Math.random() * NUM + 1;
  }

  createVillages() {
    for (let i = 0; i < this.villageCount; i++) {
      console.log(this.villageContainer);
      const village = new Village(
        this.villageContainer,
        this.mapWidth,
        this.mapHeight
      );
      this.villageContainer.push(village.townSize);
    }
  }

  testCreateVillages(villageContainer, maxWidth, maxHeight) {
    console.log(villageContainer);
    for (let i = 0; i < this.villageCount; i++) {
      const village = new Village(villageContainer, maxWidth, maxHeight);
      villageContainer.push(village);
    }
  }

  initService() {
    this.villageCount = this.getRandomVillageCount();

    this.testCreateVillages(this.parentVillages, 600, 600);
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

        this.testCreateVillages(this.childVillages, parentWidth, parentHeight);

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
