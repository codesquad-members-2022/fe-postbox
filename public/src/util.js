const isContainSelector = (node, selector) => { 
    if (node.classList.contains(selector)) {
        return true;
    }
}

const searchNode = (currentNode, className) => {
  if (isContainSelector(currentNode, className)) {
    return currentNode;
  }
  
  for (let i = 0; i < currentNode.children.length; i++) {
    const returnValue = searchNode(currentNode.children[i], className);
    if (returnValue) {
      return returnValue;
    }
  }
}

const searchNodes = (currentNode, className) => {
  if (isContainSelector(currentNode, className)) {
      nodes.push(currentNode);
  }

  for (let i = 0; i < currentNode.children.length; i++) {
      searchNodes(currentNode.children[i], className);
  }
}

const nodes = [];

const customQuerySelector = (className) => {
  return searchNode(document.body, className);
}

const customQuerySelectorAll = (className) => {
  searchNodes(document.body, className);
  return nodes;
}

export { customQuerySelector, customQuerySelectorAll };