const getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start) + start);
const toInt = (number) => Math.floor(number);
const gacha = (probability) => {
  if (getRandomNumber(0, 100) < probability) return true;
  return false;
};

module.exports = { getRandomNumber, toInt, gacha };
