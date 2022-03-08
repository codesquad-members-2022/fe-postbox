const villages = [];
const BORDER = 2;
const LENGTH_MIN = 50;
const LENGTH_MAX = 500;
const DISTANCE_MIN = 20;

const villageTemplate = () => {
  return document.createElement("div");
};

const randomLength = (range) => {
  return Math.floor(Math.random() * (range.max - range.min) + range.min);
};

const randomLocation = (range) => {
  return Math.floor(Math.random() * (range.max - range.min) + range.min);
};

const getInnerVillage = (width, height) => {
  const innerVillage = villageTemplate();
  const innerHeight = randomLength({
    min: LENGTH_MIN,
    max: height - 2 * BORDER - DISTANCE_MIN,
  });
  const innerWidth = randomLength({
    min: LENGTH_MIN,
    max: width - 2 * BORDER - DISTANCE_MIN,
  });
  const innerTop = randomLocation({
    min: DISTANCE_MIN,
    max: height - 2 * BORDER - innerHeight,
  });
  const innerLeft = randomLocation({
    min: DISTANCE_MIN,
    max: width - 2 * BORDER - innerWidth,
  });

  if (innerHeight < LENGTH_MIN || innerWidth < LENGTH_MIN) return null;

  innerVillage.style.width = `${innerWidth}px`;
  innerVillage.style.height = `${innerHeight}px`;
  innerVillage.style.border = `${BORDER}px solid`;
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
  let width = randomLength({ min: LENGTH_MIN, max: LENGTH_MAX });
  let height = randomLength({ min: LENGTH_MIN, max: LENGTH_MAX });
  const left = randomLocation({
    min: DISTANCE_MIN,
    max: screen.availWidth - width,
  });
  const top = randomLocation({
    min: DISTANCE_MIN,
    max: screen.availHeight - height,
  });

  village.style.width = `${width}px`;
  village.style.height = `${height}px`;
  village.style.top = `${top}px`;
  village.style.left = `${left}px`;
  village.style.position = "relative";
  village.style.border = `${BORDER}px solid`;

  range(number).forEach((_) => {
    const innerVillage = getInnerVillage(width, height);
    if (innerVillage) {
      village.append(innerVillage);

      width = innerVillage.style.width.slice(0, -2);
      height = innerVillage.style.height.slice(0, -2);
      village = innerVillage;
    }
  });

  return outerVillage;
};

const vilageChunk = getVillageChunk(2);
const body = document.querySelector("body");

body.append(vilageChunk);
