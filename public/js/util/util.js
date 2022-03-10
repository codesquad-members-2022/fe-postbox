export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const convertStringToHTML = (string) => {
  const div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
};
