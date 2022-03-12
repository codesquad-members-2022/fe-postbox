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

export function getRandomPosition($element) {
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

export function getClassName($target, className) {
  let answer = null;
  function recursive($element) {
    if ($element.children.length === 0 || answer) return;

    for (const childNode of $element.children) {
      if (childNode.classList.contains(className)) {
        answer = childNode;
        break;
      }
      recursive(childNode);
    }
  }
  recursive($target);
  return answer;
}

export function getClassNameAll($target, className) {
  const result = [];
  function recursive($element) {
    if ($element.children.length === 0) return;

    for (const childNode of $element.children) {
      if (childNode.classList.contains(className)) {
        result.push(childNode);
      }
      recursive(childNode);
    }
  }
  recursive($target);
  return result;
}

export function findParentNode($element) {
  return $element.parentNode;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms * 1000));
}

export function quickSortwithObj(arr, key) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    if (Number(pivot[key]) <= Number(target[key])) {
      left.push(target);
    } else {
      right.push(target);
    }
  }
  const leftSorted = quickSortwithObj(left, key);
  const rightSorted = quickSortwithObj(right, key);
  return [...leftSorted, pivot, ...rightSorted];
}
