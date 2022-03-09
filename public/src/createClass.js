import { Map } from './map.js';
import { Town } from './town.js';
import { renderTown } from './renderTown.js';

const createTownInstance = (parent) => {
  const townWidth = Number((parent.width * generatePercent()).toFixed());
  const townHeight = Number((parent.height * generatePercent()).toFixed());
  return new Town(townHeight, townWidth);
}

const createBiggestInstance = (size) => {
  while (true) {
    const width = Math.floor(((Math.random() * 600) + 20));
    const height = Math.floor(((Math.random() * 600) + 20));
  if (width * height < size) {
    return new Town(height, width);
    }
  }
}

const makeBiggestTown = map => {
  let space = map.getSize() / 3;

  while (space > 100000) {
    const newTown = createBiggestInstance(space);
    space -= newTown.getSize();
    map.towns.push(newTown);
  }
};


const makeInnerTown = (map, node) => {
  for (let i = 0; i < map.towns.length; i++) {
    const parentSize = map.towns[i].getSize();
    const minChildSize = map.towns[i].getSize() / 20;
    let space = Math.floor(parentSize / 3);

    renderTown(map.towns[i], node);
    
    while (space > minChildSize) {
      const newTown = createTownInstance(map.towns[i]);
      if (newTown.getSize() < 500) return;
      space -= newTown.getSize();
      map.towns[i].towns.push(newTown);
    }

    makeInnerTown(map.towns[i], node.children[i]);
  }
};

const generatePercent = () => {
  return (Number(Math.random().toFixed(2))*0.85) + 0.01
}

export { makeInnerTown, makeBiggestTown };