import { getRandomNumber, getRandomLocation } from "./utils.js";

class Town {
    constructor() {
        this.location = getRandomLocation();
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
