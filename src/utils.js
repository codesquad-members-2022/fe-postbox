import { STYLE } from './constants.js';

const { JUSTIFY_CONTENT, ALIGN_ITEMS, FLEX_DIRECTION } = STYLE;

export function assignStyles($element, styleObj) {
  Object.assign($element.style, styleObj);
}

export function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

export function getLocation($element) {
  const styleObj = {
    justifyContent:
      JUSTIFY_CONTENT[getRandomNumber(0, Object.keys(JUSTIFY_CONTENT).length)],
    alignItems:
      ALIGN_ITEMS[getRandomNumber(0, Object.keys(ALIGN_ITEMS).length)],
    flexDirection:
      FLEX_DIRECTION[getRandomNumber(0, Object.keys(FLEX_DIRECTION).length)],
  };
  assignStyles($element, styleObj);
}
