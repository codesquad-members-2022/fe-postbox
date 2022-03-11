const getElementByClassName = (node, target) => {
  let result = null;
  if (!node) return null;
  for (let i = 0; i < node.children.length; i++) {
    if ([...node.children[i].classList].includes(target)) {
      return node.children[i];
    }
    result = getElementByClassName(node.children[i], target);
    if (result) return result;
  }
};

const getElementsByClassName = (node, target) => {
  const result = [];
  if (!node) return result;
  [...node.children].forEach((cur) => {
    if ([...cur.classList].includes(target)) {
      result.push(cur);
    }
    result.push(...getElementsByClassName(cur, target));
  });
  return result;
};

export { getElementsByClassName, getElementByClassName };
