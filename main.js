import { NodeFinder } from './js/NodeFinder.js'

const containerInfo = {
  MAX_X : 700,
  MAX_Y : 700,
  MIN_X : 300,
  MIN_Y : 300
}

const villageInfo = {
  posX: [],
  posY: [],
  villageCnt: 0,
  MAX_X : 200,
  MAX_Y : 200,
  MIN_X : 100,
  MIN_Y : 100,
}

const nextContainerSize = {
  MAX_X: 0,
  MAX_Y: 0,
  MIN_X: 0,
  MIN_Y: 0
}

const nextVillageSize = {
  coordinateX: [],
  coordinateY: [],
  posX: [],
  posY: [],
  villageCnt: 0,
  MAX_X : 0,
  MAX_Y : 0,
  MIN_X : 0,
  MIN_Y : 0,
}

function setVillageCounter() {
  const MAX_COUNT = 4;
  const MIN_COUNT = 1;
  return Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT) + MIN_COUNT);
}

function setVillagePos(coordinate, villageSize) {
  // 마을 추가
  const village = NodeFinder.querySelector(`.village--${villageInfo.villageCnt}`);

  village.style.left = coordinate[0]+"px";
  village.style.top = coordinate[1]+"px";
  village.style.width = villageSize[0]+"px";
  village.style.height = villageSize[1]+"px";

  villageInfo.villageCnt++;
}

function createRandomSize(sizeInfo) {
  // 마을 좌표 랜덤 생성
  const size = sizeInfo;

  const x = Math.floor(Math.random() * (size.MAX_X - size.MIN_X) + size.MIN_X);
  const y = Math.floor(Math.random() * (size.MAX_Y - size.MIN_Y) + size.MIN_Y);

  return [x, y];
}

function pushPrevVillagePos(coordinate, village, pos) {
  village.coordinateX.push(coordinate[0]);
  village.coordinateY.push(coordinate[1]);
  village.posX.push(pos[0]);
  village.posY.push(pos[1]);
}

function calcNextContainerSize(coordinate, pos) {
  let flag = 10;
  
  nextContainerSize.MAX_X = pos[0] - flag;
  nextContainerSize.MAX_Y = pos[1] - flag;
  nextContainerSize.MIN_X = coordinate[0] + flag;
  nextContainerSize.MIN_Y = coordinate[1] + flag;
}

function calcNextVillageSize() {
  let flag = 0.3;
  
  nextVillageSize.MAX_X = Math.floor(villageInfo.MAX_X * flag);
  nextVillageSize.MAX_Y = Math.floor(villageInfo.MAX_Y * flag);
  nextVillageSize.MIN_X = Math.floor(villageInfo.MIN_X * flag);
  nextVillageSize.MIN_Y = Math.floor(villageInfo.MIN_Y * flag);
}

function createVillage(container, village) {
  // 해당 좌표에 생성할 수 있는지 확인
  while(true) {
    const coordinate = createRandomSize(container);
    const villageSize = createRandomSize(village);
    const pos = [coordinate[0] + villageSize[0], coordinate[1] + villageSize[1]];
    if(pos[0] < containerInfo.MAX_X && pos[1] < containerInfo.MAX_Y) {
      pushPrevVillagePos(coordinate, village, pos);
      addVillageHTML();
      setVillagePos(coordinate, villageSize);
      // debugger;
      calcNextContainerSize(coordinate, pos);
      calcNextVillageSize();
      break;
    }
  }
  isVillage(nextContainerSize, nextVillageSize);
}

function isVillage(container, village) {
  // 해당 좌표에 마을이 존재하는지
  
  function isEmpty(dirA, dirB) {
    return dirA || dirB;
  }
  
  let flag = -20;
  const coordinate = createRandomSize(container);
  const villageSize = createRandomSize(village);

  while(true) {
    const pos = [coordinate[0] + villageSize[0], coordinate[1] + villageSize[1]];
    const left = village.coordinateX.every(e => e > pos[0]);
    const top = village.coordinateY.every(e => e > pos[1]);
    const right = village.posX.every(e => e < coordinate[0]);
    const bottom = village.posY.every(e => e < coordinate[1]);
    
    if((isEmpty(left, right) || isEmpty(top, bottom)) && (pos[0] < container.MAX_X && pos[1] < container.MAX_Y)) {
      pushPrevVillagePos(coordinate, village, pos);
      addVillageHTML();
      setVillagePos(coordinate, villageSize);
      break;
    } else {
      if(coordinate[0] <= 0 || coordinate[1] <= 0) flag *= -1;
        
      coordinate[0] += flag;
      coordinate[1] += flag;
    }
  }
}

function addVillageHTML() {
  const container = NodeFinder.querySelector('.container');
  const newVillage = document.createElement('div');
  
  newVillage.className = `village village--design village--pos village--${villageInfo.villageCnt}`;
  container.appendChild(newVillage);
}

function renderVillages() {
  createVillage(containerInfo,villageInfo);
}

renderVillages();