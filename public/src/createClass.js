import { Map } from './map.js';
import { Town } from './town.js';

const makeBiggestTown = (map) => {
  let currentSize = map.getHalfSize();
  while (currentSize > 10000) {
    const newTown = createTownInstance(currentSize);
    if (newTown !== undefined) {
      currentSize -= newTown.size;
      map.towns.push(newTown);
    } else {
      break;
    }
  }
}

const createTownInstance = (currentSize) => {
  const townWidth = generateRandom();
  const townHeight = generateRandom();
  if (isValidSize(townWidth, townHeight, currentSize)) {
    return new Town(townHeight * townWidth);
  }
}

const makeTown = (map) => {
  for (let i = 0; i < map.towns.length;i++) {
    let currentSize = Math.floor(map.towns[i].size / 2); // 부모마을의 2분의1 사이즈가 자식 마을의 최대 크기
    while (currentSize > (map.towns[i].size / 5)) { //자식 마을의 최소크기가 부모마을의 5분의1
      if (currentSize <= 1000) {// 마을의 크기가 우체통보다 작으면 리턴
        return;
      }
      // debugger;
      const newTown = createTownInstance(currentSize);//조건에 맞으면 마을객체를 만들고 부모마을의 배열에 넣어준다
      if (newTown !== undefined) {
        currentSize -= newTown.size;
        map.towns[i].towns.push(newTown);
      } else {
        break;
      }
    }
    makeTown(map.towns[i]);//부모마을의 자식마을 배열로 들어가면서 무한루프
  };
}


// const makeInnerTown = (towns) => {
//   towns.forEach(town => {
    
//   });
// }



const generateRandom = () => {
  return Math.floor(Math.random() * Math.sqrt(302500)) + 100;
}

const isValidSize = (width, height, currentSize) => {
  if (width * height < currentSize) return true;
  
}

export { makeTown, makeBiggestTown };