import { Map } from './map.js';
import { Town } from './town.js';

const makeBiggestTown = map => {
  let space = map.getSize();

  while (space > 10000) {
    const newTown = createTownInstance(map);
    space -= newTown.getSize();
    map.towns.push(newTown);
  }
};

const createTownInstance = (parent) => {
  const townWidth = parent.width * generatePercent();
  const townHeight = parent.height * generatePercent();
  return new Town(townHeight, townWidth);
}

const makeInnerTown = map => {
  for (let i = 0; i < map.towns.length; i++) {
    const parentSize = map.towns[i].getSize();
    const minChildSize = map.towns[i].getSize() / 50;

    let space = Math.floor(parentSize / 3);

    while (space > minChildSize) {
      const newTown = createTownInstance(map.towns[i]);
      space -= newTown.getSize();
      map.towns[i].towns.push(newTown);
    }

    makeInnerTown(map.towns[i]);
  }
};

const generatePercent = () => {
  return (Math.random().toFixed(2))
}

export { makeInnerTown, makeBiggestTown };