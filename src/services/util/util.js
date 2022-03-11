const searchElementByClassName = (parentNodes, targetClassName) => {
  const iterableParents = [parentNodes].flat();
  const children = iterableParents.map((parent) => [...parent?.children]);
  const targetElement = children
    .flat()
    .filter((element) => element.hasChildNodes())
    .find((element) => element.className === targetClassName);

  if (!targetElement) {
    return searchElementByClassName(children.flat(), targetClassName);
  }

  return targetElement;
};

const searchAllElementByClassName = (
  parentNodes,
  targetClassName,
  previoustarget
) => {
  const iterableParents = [parentNodes].flat();
  const children = iterableParents.map((parent) => [...parent?.children]);
  const hasDownLayer = children
    .flat()
    .filter((element) => element.hasChildNodes()).length;

  children.flat().forEach((element) => {
    if (element.className === targetClassName) {
      previoustarget.push(element);
    }
  });

  if (hasDownLayer) {
    return searchAllElementByClassName(
      children.flat(),
      targetClassName,
      previoustarget
    );
  }

  return previoustarget;
};

export { searchElementByClassName, searchAllElementByClassName };
