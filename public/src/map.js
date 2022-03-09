import { customQuerySelector } from './util.js';

export class Map {
    constructor() {
      this.towns = [];
    }

    getHalfSize() {
        const map = customQuerySelector('map');
        return Math.floor((map.offsetWidth * map.offsetHeight) / 2);
    }
}