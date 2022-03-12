import { Town } from './town.js';
import { placeTown } from './renderTown.js';

const generatePercent = () => {
  //자식마을의 크기를 부모마을에 따라 상대적으로 줄어들게 하기 위한 퍼센트
  return Number(Math.random() * 0.85 + 0.01).toFixed(2);
};

const createTownInstance = parent => {
  for (let i = 0; i < 1000; i++) {
    const townHeight = Number((parent.height * generatePercent()).toFixed()/1.2);
    const townWidth = Number((parent.width * generatePercent()).toFixed()/1.2);
    
    if (townWidth > 44 && townHeight > 40) {
      const newTown = new Town(townHeight, townWidth);
      insertPostBox(newTown);
      return newTown;
    }
  }
};

const createBiggestTown = size => {
  while (true) {
    const width = Math.floor(Math.random() * 600 + 20);
    const height = Math.floor(Math.random() * 600 + 20);
    if (width * height < size) {
      return new Town(height, width);
    }
  }
};

const insertPostBox = town => {
  const boolNumber = Math.round(Math.random()); //0 아니면 1 할당
  if (boolNumber) {
    town.postBoxSize = Math.floor(Math.random() * 499 + 1);
  }
};

const makeBiggestTowns = townMap => {
  let space = townMap.getSize() / 3;

  while (space > 100000) {
    const newTown = createBiggestTown(space);
    insertPostBox(newTown);
    space -= newTown.getSize();
    townMap.towns.push(newTown);
  }
};

const createInnerTowns = (town, parentSize) => {
  const minChildSize = town.getSize() / 4;
  let space = Math.floor(parentSize / 1.5);

  while (space > minChildSize) {
    const newTown = createTownInstance(town);
    if (newTown === undefined || newTown.getSize() < 1000) return;
    space -= newTown.getSize();
    town.towns.push(newTown);
  }
};

const makeMap = (townMap, node, townWithPostBoxes) => {
  const positionData = [];
  if (node === undefined) {
    return;
  }
  
  townMap.towns.forEach((town, i) => {
    const parentSize = town.getSize();
    placeTown(townMap, town, node, positionData, townWithPostBoxes);
    createInnerTowns(town, parentSize);
    
    
    if (node.classList.contains('map')) {
      makeMap(town, node.children[i],townWithPostBoxes);
    } else {
      makeMap(town, node.children[i + 1],townWithPostBoxes);
    }
  });

};

export { makeMap, makeBiggestTowns };
