export function myQuerySelector(bodyNode, target) {
  if (!bodyNode) return;
  const currentElement = [...bodyNode.children];

  for (let i = 0; i < currentElement.length; i++) {
    if (currentElement[i].classList.contains(target)) {
      return currentElement[i];
    }

    const resultElement = myQuerySelector(currentElement[i], target);
    if (resultElement) return resultElement;
  }
}

const nodes = [];

export function myQuerySelectorAll(bodyNode, target) {
  if (!bodyNode) return;

  if (bodyNode.classList.value === target) nodes.push(bodyNode);

  for (let child of bodyNode.children) {
    myQuerySelectorAll(child, target);
  }

  return nodes;
}
