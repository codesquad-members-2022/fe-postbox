function getRandomNumber({ min, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDatasetNames(nodes) {
  let names = [];
  nodes.forEach((node) => {
    names = [...names, node.dataset.name];
  });
  return names;
}

function getElementByClassName(className) {
  const startEl = document.children[0];
  const stack = [startEl];
  while (stack.length) {
    const curEl = stack.pop();
    if (curEl.classList.contains(className)) {
      return curEl;
    }
    if (curEl.children) {
      stack.push(...curEl.children);
    }
  }
  return null;
}

export { getRandomNumber, getDatasetNames, getElementByClassName };
