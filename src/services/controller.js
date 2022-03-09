import Village from "./village.js";

class Controller {
  constructor(mapSize) {
    this.mapSize = mapSize;
    this.villageContainer = [];
    this.villageCount = null;
  }
  getRandomVillageCount() {
    const NUM = 10;
    return Math.random() * NUM + 1;
  }

  createVillages() {
    for (let i = 0; i < this.villageCount; i++) {
      const village = new Village(this.villageContainer, this.mapSize);
      this.villageContainer.push(village.townSize);
    }
  }

  initService() {
    this.villageCount = this.getRandomVillageCount();
    this.createVillages();
  }
}

export default Controller;
