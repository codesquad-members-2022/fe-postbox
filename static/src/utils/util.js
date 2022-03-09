const checkClassName = (element, className) => {
  const classList = element.classList;
  return classList.contains(className);
};

const searchChildElements = (parentElement, className) => {
  const currentElements = Array.from(parentElement.children);
  if (currentElements.length === 0) return [];

  const elementList = currentElements.reduce((elementList, element) => {
    if (checkClassName(element, className)) elementList.push(element);
    elementList = [...elementList, ...searchChildElements(element, className)];
    return elementList;
  }, []);
  return elementList;
};

export const getElementsByClassName = (className) => {
  const parentElement = document.body;
  const elementsByClassName = searchChildElements(parentElement, className);
  return elementsByClassName;
};
