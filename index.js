function getRandomVillageCount() {
  const NUM = 10;
  return Math.random() * NUM + 1;
}

let villageCount = getRandomVillageCount();

const villageContainer = [];

const MAP_SIZE = 600;

const BLANK_SIZE = 1;

const getTownSize = ({ position }) => {
  const [positionX, positionY] = position;

  let minWidth = MAP_SIZE;
  let minHeight = MAP_SIZE;
  villageContainer.forEach(({ x, y }) => {
    const [existX] = x;
    const [existY] = y;

    if (positionX < existX && minWidth > existX) {
      minWidth = existX;
    }

    if (positionY < existY && minHeight > existY) {
      minHeight = existY;
    }
  });

  const newWidth =
    Math.floor(Math.random() * (minWidth - positionX - BLANK_SIZE)) + 1;
  const newHeight =
    Math.floor(Math.random() * (minHeight - positionY - BLANK_SIZE)) + 1;

  return {
    x: [positionX, newWidth],
    y: [positionY, newHeight],
  };
};

const checkPosition = (newX, newY) => {
  for (const { x, y } of villageContainer) {
    const [minX, maxX] = x;
    const [minY, maxY] = y;

    const isInsideBox =
      minX < newX && newX < minX + maxX && minY < newY && newY < minY + maxY;
    if (isInsideBox) {
      newX = Math.floor(Math.random() * (MAP_SIZE - BLANK_SIZE)) + 1;
      newY = Math.floor(Math.random() * (MAP_SIZE - BLANK_SIZE)) + 1;
      checkPosition(newX, newY);
    }
  }

  return [newX, newY];
};

const SIZE_LIMIT = 2 / 3;

for (let i = 0; i < villageCount; i++) {
  const x = Math.floor(Math.random() * (MAP_SIZE - BLANK_SIZE)) + 1;
  const y = Math.floor(Math.random() * (MAP_SIZE - BLANK_SIZE)) + 1;

  const position = checkPosition(x, y);

  const size = getTownSize({ position });
  villageContainer.push(size);
}

function makeBox() {
  for (const villageInfo of villageContainer) {
    const {
      x: [left, width],
      y: [bottom, height],
    } = villageInfo;
    const village = document.createElement("div");
    village.style.position = "absolute";
    village.style.border = "solid 1px black";
    village.style.left = `${left}px`;
    village.style.bottom = `${bottom}px`;
    village.style.height = `${height}px`;
    village.style.width = `${width}px`;
    document.querySelector(".map").appendChild(village);
  }
}

makeBox();
