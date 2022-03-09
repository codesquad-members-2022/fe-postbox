const range = (number) => {
  return [...Array(number)].map((_, index) => index);
};

const getLengthWithoutPixel = (length) => {
  return Number(length.slice(0, -2));
};

const randomNumber = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export { range, getLengthWithoutPixel, randomNumber };
