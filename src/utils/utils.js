export const selector = (selectorName, base = document) => {
  return base.querySelector(selectorName);
};

export const selectorAll = (selectorName, base = document) => {
  return base.querySelectorAll(selectorName);
};

export const range = (from, to) => {
  const diff = to - from;
  return (Math.random() * diff + from) >> 0;
  // from ~ to-1
};
