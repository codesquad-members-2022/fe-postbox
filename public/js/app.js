import {
  range,
  getLengthWithoutPixel,
  randomNumber,
  delay,
  sort,
} from "./utils.js";
import { getElementById, searchPostBoxes } from "./search.js";

const dataAddress = "http://localhost:3000/size";
const getSizeData = async (dataAddress) => {
  const respond = await fetch(dataAddress);
  return respond.json();
};

const sizeData = await getSizeData(dataAddress);

let villageAlphabet = 65;
const delayTime = 2000;
const map = getElementById("map");
const btn = getElementById("btn");
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 800;

const BORDER = 2;
// const DISTANCE_MIN = 20;
// const LENGTH_MIN = 50;
// const POSTBOX_MAX = 30;
// const POSTBOX_MIN = 10;
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
  Object.assign(village.style, {
    width: `${property.width}px`,
    height: `${property.height}px`,
    top: `${property.top}px`,
    left: `${property.left}px`,
    position: isPositionAbsolute ? "absolute" : "relative",
  });
};

const getPostbox = () => {
  const postbox = document.createElement("span");
  const size = randomNumber({ max: POSTBOX_MAX, min: POSTBOX_MIN });
  postbox.innerHTML = "📮";
  postbox.dataset.size = `${size}`;
  Object.assign(postbox.style, {
    position: "absolute",
    fontSize: `${size}px`,
  });

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
    if (!innerVillage) return;

    village.append(innerVillage);
    width = getLengthWithoutPixel(innerVillage.style.width);
    height = getLengthWithoutPixel(innerVillage.style.height);
    village = innerVillage;
  });

  return outerVillage;
};

const addVillages = () => {
  const count = randomNumber({ max: divisions.length, min: 1 });
  for (let i = 0; i < count; i++) {
    const innerCount = randomNumber({ max: 5, min: 0 });
    const villageChunk = getVillageChunk(innerCount);
    map.append(villageChunk);
  }
};

const getVillageWithPostbox = (postbox) => {
  return postbox.closest(".village");
};

const getVillageName = (postbox) => {
  return getVillageWithPostbox(postbox).dataset.name;
};

const changeBorderColor = (postboxes) => {
  postboxes.forEach((postbox) => {
    const village = getVillageWithPostbox(postbox);
    village.style.borderColor = "red";
  });
};

const showVillagesWithPostbox = (postboxes) => {
  const villagesTextBox = getElementById("villages-have-postbox");
  const villagesWithPostbox = postboxes.map((postbox) =>
    getVillageName(postbox)
  );

  villagesTextBox.innerText = `${villagesWithPostbox.join(", ")} 총 ${
    villagesWithPostbox.length
  }개의 마을입니다.`;

  delay(delayTime).then(() => changeBorderColor(postboxes));
};

const getPostboxMap = (postboxes) => {
  const postboxMap = new Map();

  postboxes.forEach((postbox) => {
    const size = Number(postbox.dataset.size);
    const villageName = getVillageName(postbox);
    postboxMap.has(size)
      ? postboxMap.set(size, [...postboxMap.get(size), villageName])
      : postboxMap.set(size, [villageName]);
  });

  return postboxMap;
};

const showSortedPostbox = (postboxes) => {
  const sortedPostboxText = getElementById("sort-postboxes");
  const postboxMap = getPostboxMap(postboxes);
  const postboxSizes = postboxes.map((postbox) => Number(postbox.dataset.size));
  const sortedPostbox = sort([...new Set(postboxSizes)]);
  const sortedVillage = sortedPostbox
    .map((postbox) => {
      return postboxMap.get(postbox).join(", ");
    })
    .join(", ");

  if (!sortedPostbox.length) return;
  sortedPostboxText.innerText = `우체통의 크기는 ${sortedVillage}순입니다.`;
};

btn.addEventListener("click", () => {
  showVillagesWithPostbox(postboxes);
  showSortedPostbox(postboxes);
});

addVillages();
const postboxes = searchPostBoxes(map);
