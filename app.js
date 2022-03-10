import { range, getLengthWithoutPixel, randomNumber } from "./utils.js";
import { getElementById, searchPostBoxes } from "./search.js";

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
  const villageNameBlock = document.createElement("div");
  const villageName = String.fromCharCode(villageAlphabet);

  village.classList.add("village");
  village.dataset.name = villageName;
  villageNameBlock.innerHTML = villageName;
  villageNameBlock.classList.add("village-name");
  villageAlphabet += 1;
  village.append(villageNameBlock);
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
  village.style.position = isPositionAbsolute ? "absolute" : "relative";
};

const getPostbox = () => {
  const postbox = document.createElement("span");
  const size = randomNumber({ max: 30, min: 10 });
  postbox.innerHTML = "📮";
  postbox.style.position = "absolute";
  postbox.style.fontSize = `${size}px`;
  postbox.dataset.size = `${size}`;

  return postbox;
};

const addPostboxRandomly = (village) => {
  const hasPostbox = randomNumber({ max: 2, min: 0 });

  if (hasPostbox) {
    const postbox = getPostbox();
    village.append(postbox);
    village.dataset.hasPostbox = true;
  }
};

const getInnerVillage = (outerWidth, outerHeight) => {
  const innerVillage = villageTemplate();
  const innerVillageProperty = getInnerVillageProperty(outerWidth, outerHeight);

  if (
    innerVillageProperty.height < LENGTH_MIN ||
    innerVillageProperty.width < LENGTH_MIN
  ) {
    villageAlphabet -= 1;
    return null;
  }

  styleVillage(innerVillage, innerVillageProperty);

  addPostboxRandomly(innerVillage);

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

  addPostboxRandomly(village);

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
console.log(searchPostBoxes(map));
