export {
  getElementByClassName,
  getElementsByClassName,
} from '../dom/selector.js';

export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  return element;
};

export const addClass = (className, element) => {
  element.classList.add(className);
};

export const range = (from, to) => {
  const diff = to - from;
  return (Math.random() * diff + from) >> 0;
  // from ~ to-1
};
