import { getRandomNumber, getRandomLocation } from "./utils.js";
import { MAP_SIZE } from "./constants.js";

class Town {
    constructor() {
        this.location = getRandomLocation();
        this.width;
        this.height;
        this.postOfficeLocation;
    }

    getReferencePoint() {
        return this.location
    }

    getWidth() {

    }

    getHeight() {

    }

}

const town = new Town()
