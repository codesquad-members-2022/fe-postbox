const checkClassName = (node, className) => {
  const classList = node.classList;
  return classList.contains(className);
};

const searchChildNodes = (parentNode, className) => {
  const currentNodes = Array.from(parentNode.children);
  if (currentNodes.length === 0) return [];

  let nodeList = [];
  currentNodes.forEach((node) => {
    if (checkClassName(node, className)) nodeList.push(node);
    nodeList = [...nodeList, ...searchChildNodes(node, className)];
  });
  return nodeList;
};

export const getNodesByClassName = (className) => {
  const parentNode = document.body;
  const nodesByClassName = searchChildNodes(parentNode, className);
  return nodesByClassName;
};
