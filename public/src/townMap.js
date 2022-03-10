import { customQuerySelector } from './util.js';

export class TownMap {
    constructor() {
      this.towns = [];
      this.width = 0;
      this.height = 0;
    }

    getSize() {
      const townMap = customQuerySelector('map');
      this.width = townMap.offsetWidth;
      this.height = townMap.offsetHeight;
      return this.width * this.height;
    }
}