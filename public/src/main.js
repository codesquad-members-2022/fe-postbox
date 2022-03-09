import { makeBiggestTown, makeInnerTown } from './createClass.js';
import { Map } from './map.js';
// 구현 목표
  //1. map.towns를 순회
  //2. 재귀로 내부 town들이 생성되게 만든다

//추가된 제약조건
  // 한 마을의 내부에 생길 수 있는 마을 최대갯수는 3개를 넘지 못한다. 

//추가 구현 목표
//1. 자식마을의 크기를 상수가 아닌 퍼센티지로 변경
  //1. generateRandom 함수의 범위를 퍼센티지에 맞게 변경
  //2. createTownIns를 비율이 리턴되도록 변경
  //3. 가로 세로가 부모의 가로 세로의 비율로 선절하도록 수정
const main = () => {
  const map = new Map();
  makeBiggestTown(map);
  makeInnerTown(map);
  console.log(1212,map);
}

main();
