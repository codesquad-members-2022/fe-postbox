import { MAP_SIZE } from "./constants.js";

function getRandomNumber({ min, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomNumber };
