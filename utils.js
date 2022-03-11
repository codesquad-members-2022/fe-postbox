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

const sort = (array) => {
  if (array.length === 1) return array;

  const pivot = array[0];
  const before = [];
  const after = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      before.push(array[i]);
    } else {
      after.push(array[i]);
    }
  }

  return [...sort(before), pivot, ...sort(after)];
};

export { range, getLengthWithoutPixel, randomNumber, delay };
