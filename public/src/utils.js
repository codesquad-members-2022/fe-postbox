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

function descendByMailboxSize(nodes) {
  for(let i = 0; i < nodes.length - 1; i++) {
    for(let j = i + 1; j < nodes.length; j++ ) {
      if(nodes[i].dataset.mailboxSize < nodes[j].dataset.mailboxSize) {
        [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
      }
    }
  }
  return nodes
}

const delay = (ms) =>
  new Promise((res) => {
    setTimeout(() => res(), ms);
  });

export { getDatasetNames, getElementByClassName, delay, descendByMailboxSize };
