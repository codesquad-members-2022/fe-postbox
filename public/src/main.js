import { makeBiggestTown, makeTown } from './createClass.js';
import { Map } from './map.js';
// 구현 목표
  //1. map.towns를 순회
  //2. 재귀로 내부 town들이 생성되게 만든다

//추가된 제약조건
  // 한 마을의 내부에 생길 수 있는 마을 최대갯수는 3개를 넘지 못한다. 

const main = () => {
  const map = new Map();
  makeBiggestTown(map);
  makeTown(map);
  console.log(1212,map);
}

main();
