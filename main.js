import { NodeFinder } from './js/NodeFinder.js'

const containerInfo = {
  CONTAINER_MAX_X : 700,
  CONTAINER_MAX_Y : 700,
  CONTAINER_MIN_X : 300,
  CONTAINER_MIN_Y : 300
}

const villageInfo = {
  coordinateX: [],
  coordinateY: [],
  posX: [],
  posY: [],
  villageCnt: 0,
  VILLAGE_MAX_WIDTH : 200,
  VILLAGE_MAX_HEIGHT : 200,
  VILLAGE_MIN_WIDTH : 100,
  VILLAGE_MIN_HEIGHT : 100,
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

function createRandomCoordinate() {
  // 마을 좌표 랜덤 생성
  const x = Math.floor(Math.random() * (containerInfo.CONTAINER_MAX_X - containerInfo.CONTAINER_MIN_X) + containerInfo.CONTAINER_MIN_X);
  const y = Math.floor(Math.random() * (containerInfo.CONTAINER_MAX_Y - containerInfo.CONTAINER_MIN_Y) + containerInfo.CONTAINER_MIN_Y);

  return [x, y];
}

function createRandomSize() {
  // 마을 크기 랜덤 생성
  const width = Math.floor(Math.random() * (villageInfo.VILLAGE_MAX_WIDTH - villageInfo.VILLAGE_MIN_WIDTH) + villageInfo.VILLAGE_MIN_WIDTH);
  const height = Math.floor(Math.random() * (villageInfo.VILLAGE_MAX_HEIGHT - villageInfo.VILLAGE_MIN_HEIGHT) + villageInfo.VILLAGE_MIN_HEIGHT);

  return [width, height];
}

function createVillage() {
  // 해당 좌표에 생성할 수 있는지 확인
  while(true) {
    const coordinate = createRandomCoordinate();
    const villageSize = createRandomSize();
    const pos = [coordinate[0] + villageSize[0], coordinate[1] + villageSize[1]];
    if(pos[0] < containerInfo.CONTAINER_MAX_X && pos[1] < containerInfo.CONTAINER_MAX_Y) {
      villageInfo.coordinateX.push(coordinate[0]);
      villageInfo.coordinateY.push(coordinate[1]);
      villageInfo.posX.push(pos[0]);
      villageInfo.posY.push(pos[1]);
      setVillagePos(coordinate, villageSize);
      break;
    }
  }
}

function isVillage() {
  // 해당 좌표에 마을이 존재하는지
  let flag = -20;
  const coordinate = createRandomCoordinate();
  const villageSize = createRandomSize();

  function isTrue(A, B) {
    return A || B;
  }

  while(true) {
    const pos = [coordinate[0] + villageSize[0], coordinate[1] + villageSize[1]];
    const left = villageInfo.coordinateX.every(e => e > pos[0]);
    const top = villageInfo.coordinateY.every(e => e > pos[1]);
    const right = villageInfo.posX.every(e => e < coordinate[0]);
    const bottom = villageInfo.posY.every(e => e < coordinate[1]);
    

    if((isTrue(left, right) || isTrue(top, bottom)) && (pos[0] < containerInfo.CONTAINER_MAX_X && pos[1] < containerInfo.CONTAINER_MAX_Y)) {
      villageInfo.coordinateX.push(coordinate[0]);
      villageInfo.coordinateY.push(coordinate[1]);
      villageInfo.posX.push(pos[0]);
      villageInfo.posY.push(pos[1]);
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

createVillage();
isVillage();
isVillage();