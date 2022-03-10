import { makeBiggestTown, makeInnerTown } from './createClass.js';
import { TownMap } from './townMap.js';
import { customQuerySelector } from './util.js';

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
  
//구현 목표
// 랜덤하게 마을을 화면에 렌더링
  //렌더하는 방법
  // 1. poistion:relative(left, bottom)에 랜덤값을 줘서 랜덤으로 마을을 배치
  // 2. 배치된 마을들이 겹치는 알아보는 함수 구현
      //2-1. 두 마을을 비교한다고 가정하면
      // 두 width의 차이의 절대값 = |(A의 left+width) - (B의 left+width)|
      // 두 height의 차이의 절대값 = |(A의 bottom+height) - (B의 bottom+height)|
      // 두 값이 모두 B의 width와 height보다 작으면 겹친다고 판단
      // 한 값이라도 크면 안 겹침
      // 같을 경우는 겹치친 않지만 예외처리
  // 3. [{
  //  width: ~~
  //  heigth: ~~
  //},b,c,b,e]
  
const main = () => {
  const townMap = new TownMap();
  const $townMap = customQuerySelector('map');
  console.log(townMap)

  makeBiggestTown(townMap, $townMap);
  makeInnerTown(townMap, $townMap);
}

main();
