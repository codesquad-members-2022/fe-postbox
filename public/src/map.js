import { customQuerySelector } from './util.js';

export class Map {
    constructor() {
      this.towns = [];
      this.width = 0;
      this.height = 0;
    }

    getSize() {
      const map = customQuerySelector('map');
      this.width = map.offsetWidth;
      this.height = map.offsetHeight;
      return this.width * this.height;
    }
}