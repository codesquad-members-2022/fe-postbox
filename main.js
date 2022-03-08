import { NodeFinder } from './js/NodeFinder.js'

function addVillage(coordinate, villageSize) {
  // 마을 추가
  const villageFirst = NodeFinder.querySelector(".village--first");

  villageFirst.style.left = coordinate[0]+"px";
  villageFirst.style.top = coordinate[1]+"px";
  villageFirst.style.width = villageSize[0]+"px";
  villageFirst.style.height = villageSize[1]+"px";
}

function createRandomCoordinate() {
  // 마을 좌표 랜덤 생성
  const CONTAINER_MAX_X = 1500;
  const CONTAINER_MAX_Y = 800;
  const CONTAINER_MIN_X = 100;
  const CONTAINER_MIN_Y = 100;
  const x = Math.floor(Math.random() * (CONTAINER_MAX_X - CONTAINER_MIN_X) + CONTAINER_MIN_X);
  const y = Math.floor(Math.random() * (CONTAINER_MAX_Y - CONTAINER_MIN_Y) + CONTAINER_MIN_Y);

  return [x,y];
}

function createRandomSize() {
  // 마을 크기 랜덤 생성
  const VILLAGE_MAX_WIDTH = 720;
  const VILLAGE_MIN_WIDTH = 50;
  const VILLAGE_MAX_HEIGHT = 720;
  const VILLAGE_MIN_HEIGHT = 50;
  const width = Math.floor(Math.random() * (VILLAGE_MAX_WIDTH - VILLAGE_MIN_WIDTH) + VILLAGE_MIN_WIDTH);
  const height = Math.floor(Math.random() * (VILLAGE_MAX_HEIGHT - VILLAGE_MIN_HEIGHT) + VILLAGE_MIN_HEIGHT);

return [width,height]
}

function checkPosition() {
  // 해당 좌표에 생성할 수 있는지 확인
  // if(isVillage())
  while(true) {
      const coordinate = createRandomCoordinate();
      const villageSize = createRandomSize();
      const pos = [coordinate[0] + villageSize[0], coordinate[1] + villageSize[1]]
      const CONTAINER_MAX_X  = 1550;
      const CONTAINER_MAX_Y = 850;
      
      if(pos[0] < CONTAINER_MAX_X && pos[1] < CONTAINER_MAX_Y) {
        addVillage(coordinate, villageSize);
        break;
      }
  }
}

function isVillage() {
  // 해당 좌표에 마을이 존재하는지
}
checkPosition()