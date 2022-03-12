import { delay, getClassName } from './utils.js';
import { renderResult } from './showResult.js';
import { renderTown } from './render.js';

const $townMap = getClassName(document, 'town-map');
const $checkButton = getClassName(document, 'check-post__button');
const $resetButton = getClassName(document, 'reset__button');

function handleReset() {
  location.reload();
}

async function handleDelay() {
  await delay(1);
  renderResult($townMap);
}

function init() {
  renderTown($townMap, 0);
  $checkButton.addEventListener('click', handleDelay);
  $resetButton.addEventListener('click', handleReset);
}

window.addEventListener('DOMContentLoaded', init);
