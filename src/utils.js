import { MAP_SIZE } from "./constants.js";

function getRandomNumber({ min, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDatasetNames(nodes) {
  let names = [];
  nodes.forEach((node) => {
    names = [...names, node.dataset.name];
  });
  return names;
}

export { getRandomNumber, getDatasetNames };
