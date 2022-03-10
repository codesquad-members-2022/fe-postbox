const range = (number) => {
  return [...Array(number)].map((_, index) => index);
};

const getLengthWithoutPixel = (length) => {
  return Number(length.slice(0, -2));
};

const randomNumber = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

export { range, getLengthWithoutPixel, randomNumber, delay };
