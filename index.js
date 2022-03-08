const $townMap = document.querySelector("#town-map");

const LAYER_SIZE = {
  0: 300,
  1: 100,
  2: 30,
  3: 10,
};

const LAYER_COLOR = {
  0: "red",
  1: "blue",
  2: "green",
  3: "tomato",
};
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function renderChild($child, $parentNode, layer) {
  $child.style.width = `${LAYER_SIZE[layer]}px`;
  $child.style.height = `${LAYER_SIZE[layer]}px`;
  $child.style.border = `1px solid ${LAYER_COLOR[layer]}`;
  $child.classList.add("town");
  if (getRandomNumber(0, 10) >= 5) {
    $child.classList.add("down");
    $child.style["top"] = `${LAYER_SIZE[layer] / 5}px`;
  }
  $parentNode.appendChild($child);
}

function renderTown($parentNode, layer) {
  if (layer > 3) {
    return;
  }
  const townNumber = getRandomNumber(0, 2);
  for (let i = 0; i < townNumber + 1; i++) {
    console.log(`${layer}층: ${i}`);
    const $child = document.createElement("div");
    renderChild($child, $parentNode, layer);

    // 자식을 렌더링하는 함수
    // 렌더링할 마을 개수: 0~2
    renderTown($child, layer + 1);
  }
}

function init() {
  renderTown($townMap, 0);
}

window.addEventListener("DOMContentLoaded", init);
