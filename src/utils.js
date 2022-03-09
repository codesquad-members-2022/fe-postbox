
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
  const stack = [document];
  while(stack.length) {
    const curEl = stack.pop();
    if(curEl.className === className) {
      return curEl
    }
    if(curEl.childNodes) {
      stack.push(...curEl.childNodes);
    }
  }
}

export { getRandomNumber, getDatasetNames };
