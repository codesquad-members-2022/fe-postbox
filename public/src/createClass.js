import { TownMap } from './townMap.js';
import { Town } from './town.js';
import { renderTown, placeTown } from './renderTown.js';

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

const makeBiggestTown = townMap => {
  let space = townMap.getSize() / 3;

  while (space > 100000) {
    const newTown = createBiggestInstance(space);
    space -= newTown.getSize();
    townMap.towns.push(newTown);
  }
};

const makeInnerTown = (townMap, node) => {
  const positionData = [];
  
  for (let i = 0; i < townMap.towns.length; i++) {
    const parentSize = townMap.towns[i].getSize();
    const minChildSize = townMap.towns[i].getSize() / 20;
    let space = Math.floor(parentSize / 3);
    
    placeTown(townMap, townMap.towns[i], node, positionData);
    
    while (space > minChildSize) {
      const newTown = createTownInstance(townMap.towns[i]);
      if (newTown.getSize() < 500) return;
      space -= newTown.getSize();
      townMap.towns[i].towns.push(newTown);
    }

    makeInnerTown(townMap.towns[i], node.children[i]);
  }
};

const generatePercent = () => { //자식마을의 크기를 부모마을에 따라 상대적으로 줄어들게 하기 위한 퍼센트
  return (Number(Math.random().toFixed(2))*0.85) + 0.01
}

export { makeInnerTown, makeBiggestTown };