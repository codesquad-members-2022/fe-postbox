export const range = (from, to) => {
  const diff = to - from;
  return (Math.random() * diff + from) >> 0;
  // from ~ to-1
};

export {
  getElementByClassName,
  getElementsByClassName,
} from '../dom/getElement.js';
