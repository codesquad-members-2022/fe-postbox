const villages = [];

const villageTemplate = () => {
  return document.createElement("div");
};

const randomLength = (max = 400, min = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomLocation = (max = 1000, min = 10) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getInnerVillage = (width, height) => {
  const innerVillage = villageTemplate();
  const innerWidth = randomLength(width - 1);
  const innerHeight = randomLength(height - 1);
  const innerTop = randomLocation(height - innerHeight - 1);
  const innerLeft = randomLocation(width - innerWidth - 1);

  innerVillage.style.width = `${innerWidth}px`;
  innerVillage.style.height = `${innerHeight}px`;
  innerVillage.style.border = "2px solid";
  innerVillage.style.top = `${innerTop}px`;
  innerVillage.style.left = `${innerLeft}px`;
  innerVillage.style.position = "relative";

  return innerVillage;
};

const range = (number) => {
  return [...Array(number)].map((_, index) => index);
};

const getVillageChunk = (number) => {
  const outerVillage = villageTemplate();
  let village = outerVillage;
  let width = randomLength();
  let height = randomLength();
  const top = randomLocation();
  const left = randomLocation();

  village.style.width = `${width}px`;
  village.style.height = `${height}px`;
  village.style.top = `${top}px`;
  village.style.left = `${left}px`;
  village.style.position = "relative";
  village.style.border = "2px solid";

  range(number).forEach((_) => {
    const innerVillage = getInnerVillage(width, height);
    village.append(innerVillage);

    width = innerVillage.style.width.slice(0, -2);
    height = innerVillage.style.height.slice(0, -2);
    village = innerVillage;
  });

  return outerVillage;
};

const vilageChunk = getVillageChunk(2);
const body = document.querySelector("body");

body.append(vilageChunk);
