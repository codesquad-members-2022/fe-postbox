import { range, getLengthWithoutPixel } from "./utils.js";

const map = document.querySelector("#map");
const MAP_WIDTH = 1800;
const MAP_HEIGHT = 800;

const BORDER = 2;
const LENGTH_MIN = 50;
const LENGTH_MAX = Math.min(MAP_HEIGHT, MAP_WIDTH) / 2;
const DISTANCE_MIN = 20;

const division1 = { left: 0, top: 0 };
const division2 = { left: MAP_WIDTH / 2, top: 0 };
const division3 = { left: 0, top: MAP_HEIGHT / 2 };
const division4 = { left: MAP_WIDTH / 2, top: MAP_HEIGHT / 2 };
const divisions = [division1, division2, division3, division4];

const getRandomDivision = () => {
  const randomDivisionIndex = randomNumber({ min: 0, max: divisions.length });
  const randomDivision = divisions[randomDivisionIndex];
  divisions.splice(randomDivisionIndex, 1);
  return randomDivision;
};

const villageTemplate = () => {
  return document.createElement("div");
};

const randomNumber = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getInnerVillage = (width, height) => {
  const innerVillage = villageTemplate();
  const innerHeight = randomNumber({
    min: LENGTH_MIN,
    max: height - 2 * BORDER - DISTANCE_MIN,
  });
  const innerWidth = randomNumber({
    min: LENGTH_MIN,
    max: width - 2 * BORDER - DISTANCE_MIN,
  });
  const innerTop = randomNumber({
    min: DISTANCE_MIN,
    max: height - 2 * BORDER - innerHeight,
  });
  const innerLeft = randomNumber({
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

const getVillageChunk = (number) => {
  const outerVillage = villageTemplate();
  const division = getRandomDivision();

  let village = outerVillage;
  let width = randomNumber({ min: LENGTH_MIN, max: LENGTH_MAX });
  let height = randomNumber({ min: LENGTH_MIN, max: LENGTH_MAX });
  const left =
    division.left +
    randomNumber({
      min: DISTANCE_MIN,
      max: LENGTH_MAX - DISTANCE_MIN - width,
    });
  const top =
    division.top +
    randomNumber({
      min: DISTANCE_MIN,
      max: LENGTH_MAX - DISTANCE_MIN - height,
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

      width = getLengthWithoutPixel(innerVillage.style.width);
      height = getLengthWithoutPixel(innerVillage.style.height);
      village = innerVillage;
    }
  });

  return outerVillage;
};

const vilageChunk = getVillageChunk(2);

map.append(vilageChunk);
