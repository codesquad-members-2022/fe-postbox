export function getElementByClassName(className, base = document.children[0]) {
  const recursive = (node) => {
    if (node.classList.contains(className)) {
      return node;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const childNode = node.children[i];
        const result = recursive(childNode);
        if (result) return result;
      }
    }
  };

  return recursive(base);
}

const dom = getElementByClassName("town");
console.log(dom);
