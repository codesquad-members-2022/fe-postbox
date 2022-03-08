import { MAP_SIZE } from "./constants.js";

function getRandomNumber() {
    return Math.floor(Math.random() * (MAP_SIZE.MAX - MAP_SIZE.MIN + 1)) + MAP_SIZE.MIN;
}

function getRandomLocation() {
    return [getRandomNumber(), getRandomNumber()]
}

export { getRandomLocation, getRandomNumber }