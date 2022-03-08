export const selector = (selectorName, base = document) => {
  return base.querySelector(selectorName);
};
export const selectorAll = (selectorName, base = document) => {
  return base.querySelectorAll(selectorName);
};
