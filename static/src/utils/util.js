const checkClassName = (element, className) => {
  const classList = element.classList;
  return classList.contains(className);
};

const searchChildElement = (parentElement, className) => {
  const currentElements = Array.from(parentElement.children);
  if (currentElements.length === 0) return;

  for (let idx = 0, length = currentElements.length; idx < length; idx++) {
    const element = currentElements[idx];
    if (checkClassName(element, className)) return element;
    const foundElement = searchChildElement(element, className);
    if (foundElement) return foundElement;
  }
};

export const getElementByClassName = (parentElement, className) => {
  const elementsByClassName = searchChildElement(parentElement, className);
  return elementsByClassName;
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

export const getElementsByClassName = (parentElement, className) => {
  const elementsByClassName = searchChildElements(parentElement, className);
  return elementsByClassName;
};

export const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
  return randomNumber;
}
