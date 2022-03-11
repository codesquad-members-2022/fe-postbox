const { body } = document;

let find = false;
let target = null;
let targets = [];

const init = () => {
  find = false;
  target = null;
  targets = [];
};

const DFS = (element, className) => {
  if (find) return;
  if (element.classList.contains(className)) {
    find = true;
    target = element;
    return;
  }

  [...element.children].forEach((child) => {
    DFS(child, className);
  });
};

const fullDFS = (element, className) => {
  if (element.classList.contains(className)) {
    targets.push(element);
  }

  [...element.children].forEach((child) => {
    fullDFS(child, className);
  });
};

export const getElementByClassName = (className, base = body) => {
  init();
  DFS(base, className);
  return target;
};

export const getElementsByClassName = (className, base = body) => {
  init();
  fullDFS(base, className);
  return targets;
};
