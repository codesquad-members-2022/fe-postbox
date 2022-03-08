const range = (number) => {
  return [...Array(number)].map((_, index) => index);
};

const getLengthWithoutPixel = (length) => {
  return Number(length.slice(0, -2));
};

export { range, getLengthWithoutPixel };
