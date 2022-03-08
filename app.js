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

const village = villageTemplate();
const width = randomLength();
const height = randomLength();

village.style.width = `${width}px`;
village.style.height = `${height}px`;
village.style.top = `${randomLocation()}px`;
village.style.left = `${randomLocation()}px`;
village.style.position = "relative";
village.style.border = "2px solid";

const getInnerVillage = (width, height) => {
  const innerVillage = villageTemplate();
  const innerWidth = randomLength(width - 10);
  const innerHeight = randomLength(height - 10);
  const innerTop = randomLocation(height - innerHeight - 3);
  const innerLeft = randomLocation(width - innerWidth - 3);

  innerVillage.style.width = `${innerWidth}px`;
  innerVillage.style.height = `${innerHeight}px`;
  innerVillage.style.border = "2px solid";
  innerVillage.style.top = `${innerTop}px`;
  innerVillage.style.left = `${innerLeft}px`;
  innerVillage.style.position = "relative";

  return innerVillage;
};

const childVillage = getInnerVillage(width, height);
const body = document.querySelector("body");

village.append(childVillage);
body.append(village);
