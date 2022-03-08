function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function renderTown(layer) {
  if (layer > 3) {
    return;
  }
  const townNumber = getRandomNumber(0, 2);
  for (let i = 0; i < townNumber + 1; i++) {
    console.log(`${layer}층: ${i}`);
    // 자식을 렌더링하는 함수
    // 렌더링할 마을 개수: 0~2
    renderTown(layer + 1);
  }
}

function init() {
  renderTown(0);
}

window.addEventListener('DOMContentLoaded', init);
