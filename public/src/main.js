import { makeMap, makeBiggestTowns } from './createClass.js';
import { TownMap } from './townMap.js';
import { customQuerySelector, customQuerySelectorAll } from './selector.js';
import { sortTowns } from './mergeSort.js'

const main = () => {
  const townMap = new TownMap();
  const $townMap = customQuerySelector('map');
  const townWithPostBoxes = [];

  makeBiggestTowns(townMap, $townMap);
  makeMap(townMap, $townMap, townWithPostBoxes);
  console.log(townMap)
  const $$townName = customQuerySelectorAll('town-name');
  $$townName.forEach((element, i) => {
    element.textContent = String.fromCharCode(65 + i);
  });

  const $checkBtn = customQuerySelector('checkBtn');
  const $$postBox = customQuerySelectorAll('post-box');

  $checkBtn.addEventListener('click', () => {
    setTimeout(() => {


    const $numberOfTown = customQuerySelector('numberOfTown');
    const $sizeOfPostBox = customQuerySelector('sizeOfPostBox');
    
    if ($$postBox.length) {
      $$postBox.forEach(element => {
        element.parentNode.parentNode.style.border = '3px solid red';
      });
    } else {
      $numberOfTown.innerHTML = '우체통을 가진 마을이 없습니다.';
    }
    
    const nameTextArr = $$postBox.map(postBox => {
      return postBox.previousSibling.textContent;
    })
    
    const sortedTowns = sortTowns(townWithPostBoxes, nameTextArr);

    const names = nameTextArr.reduce((prev, cur) => {
      if (prev === '') {
        return cur;
      }
      return prev  +', ' + cur;
    }, '');

    const sizes = sortedTowns.reduce((prev, cur) => {
      if (prev === '') {
        return cur.townName;
      }
      return prev  +', ' + cur.townName;
    }, '')

    $numberOfTown.innerHTML = `${names}\n총 ${sortedTowns.length}개 입니다.`;
    $sizeOfPostBox.innerHTML = `우체통의 크기는 ${sizes}순입니다.`;
  }, 1000);
  });

};

main();
