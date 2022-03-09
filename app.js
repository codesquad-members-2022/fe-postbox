import { range, getLengthWithoutPixel, randomNumber } from "./utils.js";
import { getElementById } from "./search.js";

let villageAlphabet = 65;
const map = getElementById("map");
const MAP_WIDTH = 1800;
const MAP_HEIGHT = 800;

const BORDER = 2;
const DISTANCE_MIN = 20;
const LENGTH_MIN = 50;
const WIDTH_MAX = MAP_WIDTH / 2 - DISTANCE_MIN;
const HEIGHT_MAX = MAP_HEIGHT / 2 - DISTANCE_MIN;

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
  const village = document.createElement("div");
  const villageName = document.createElement("div");

  villageName.innerHTML = String.fromCharCode(villageAlphabet);
  villageName.classList.add("village-name");
  villageAlphabet++;
  village.append(villageName);
  return village;
};

const getInnerVillageProperty = (outerWidth, outerHeight) => {
  const height = randomNumber({
    min: LENGTH_MIN,
    max: outerHeight - 2 * BORDER - DISTANCE_MIN,
  });
  const width = randomNumber({
    min: LENGTH_MIN,
    max: outerWidth - 2 * BORDER - DISTANCE_MIN,
  });
  const top = randomNumber({
    min: DISTANCE_MIN,
    max: outerHeight - 2 * BORDER - height,
  });
  const left = randomNumber({
    min: DISTANCE_MIN,
    max: outerWidth - 2 * BORDER - width,
  });

  return { height, width, top, left };
};

const styleVillage = (village, property, isPositionAbsolute) => {
  village.style.width = `${property.width}px`;
  village.style.height = `${property.height}px`;
  village.style.top = `${property.top}px`;
  village.style.left = `${property.left}px`;
  village.style.border = `${BORDER}px solid`;
  village.style.position = isPositionAbsolute ? "absolute" : "relative";
};

const getInnerVillage = (outerWidth, outerHeight) => {
  const innerVillage = villageTemplate();
  const innerVillageProperty = getInnerVillageProperty(outerWidth, outerHeight);

  if (
    innerVillageProperty.height < LENGTH_MIN ||
    innerVillageProperty.width < LENGTH_MIN
  )
    return null;

  styleVillage(innerVillage, innerVillageProperty);

  return innerVillage;
};

const getVillageChunk = (number) => {
  const outerVillage = villageTemplate();
  const division = getRandomDivision();

  let village = outerVillage;
  let width = randomNumber({ min: LENGTH_MIN, max: WIDTH_MAX });
  let height = randomNumber({ min: LENGTH_MIN, max: HEIGHT_MAX });
  const left =
    division.left +
    randomNumber({
      min: DISTANCE_MIN,
      max: WIDTH_MAX - width,
    });
  const top =
    division.top +
    randomNumber({
      min: DISTANCE_MIN,
      max: HEIGHT_MAX - height,
    });

  styleVillage(village, { width, height, left, top }, true);

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

const addVillages = () => {
  const count = randomNumber({ max: 4, min: 1 });
  for (let i = 0; i < count; i++) {
    const innerCount = randomNumber({ max: 5, min: 0 });
    const villageChunk = getVillageChunk(innerCount);
    map.append(villageChunk);
  }
};

addVillages();
