export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

export function check50Percent() {
  return (Math.round(Math.random() * 10) + 1) % 2;
}

export function getChildNum(min, max) {
  return getRandomNumber(max - min) + min;
}
