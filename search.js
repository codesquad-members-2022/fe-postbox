const root = document.children[0].children[1];

const getElementById = (id, curNode = root) => {
  if (curNode.id === id) return curNode;
  if (curNode.children.length === 0) return null;

  for (let i = 0; i < curNode.children.length; i++) {
    const node = getElementById(id, curNode.children[i]);
    if (node !== null) return node;
  }
};

export { getElementById };
