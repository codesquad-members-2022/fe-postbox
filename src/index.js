import {
  findTownName,
  getClassName,
  getClassNameAll,
  getLocation,
  getRandomNumber,
} from './utils.js';
import { MAX_CHILD, MAX_LAYER, STYLE } from './constants.js';
import Town from './template/Town.js';
import PostBox from './template/PostBox.js';
const { LAYER_SIZE } = STYLE;

const $townMap = document.querySelector('#town-map');

function renderTown($parentNode, layer) {
  let townNumber = getRandomNumber(0, MAX_CHILD); // 최대 렌더링 할 수 있는 자식 요소

  // layer가 마지막 층이면 자식요소 렌더링하지 않음
  if (layer > MAX_LAYER - 1) {
    return;
  }
  getLocation($parentNode);
  // 0번째 층에서 마을이 하나라도 렌더링되게 예외처리
  if (layer === 0 && townNumber === 0) {
    townNumber = 1;
  }

  // 자식요소 렌더링
  for (let i = 0; i < townNumber; i++) {
    const newTown = new Town({ size: LAYER_SIZE[layer] });
    const $child = newTown.render(layer);
    const postBox = new PostBox({ size: `${getRandomNumber(5, 18)}px` });
    const $postBox = postBox.render(townNumber);
    // 우체통 넣을지 말지 결정
    $postBox && $child.appendChild($postBox);
    $parentNode.appendChild($child);
    // 자식을 렌더링하는 함수
    // 렌더링할 마을 개수: 0~2

    renderTown($child, layer + 1);
  }
}

function init() {
  renderTown($townMap, 0);
  const postBoxArr = getClassNameAll($townMap, 'post-box');
  const townWithPostBoxArr = findTownName(postBoxArr);
  const townNames = townWithPostBoxArr.map(
    ($town) => getClassName($town, 'town__name').innerHTML
  );
  console.log(townNames);
}

window.addEventListener('DOMContentLoaded', init);
