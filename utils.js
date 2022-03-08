import { MAP_SIZE } from "./constants.js";

function getRandomNumber({ min, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  return {
    x: getRandomNumber({ min: MAP_SIZE.MIN, max: MAP_SIZE.MAX }),
    y: getRandomNumber({ min: MAP_SIZE.MIN, max: MAP_SIZE.MAX }),
  };
}

export { getRandomLocation, getRandomNumber };
