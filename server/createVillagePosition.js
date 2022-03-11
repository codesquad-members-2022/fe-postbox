const { getRandomNumber, toInt } = require("./util.js");

const OFFSET = 31;
const MAX_TRY_COUNT = 100;
const MIN_VILLAGE_COUNT = 1;
const MAX_VILLAGE_COUNT = 6;
const MIN_LENGTH_RATIO = 0.25;
const MAX_LENGTH_RATIO = 0.5;
const MIN_LENGTH = 50;

const createVillagePosition = (width, height) => {
  const result = [];
  const visited = Array.from(Array(height + 1), () => new Array(width + 1).fill(false));
  const visitVillagePosition = ({ x, y, w, h }) => {
    for (let i = y; i < y + h; i++) {
      for (let j = x; j < x + w; j++) {
        visited[i][j] = true;
      }
    }
  };
  const getPosition = () => {
    const x = getRandomNumber(OFFSET, width);
    const y = getRandomNumber(OFFSET, height);
    const w = getRandomNumber(
      Math.max(MIN_LENGTH, toInt(width * MIN_LENGTH_RATIO)),
      toInt(width * MAX_LENGTH_RATIO)
    );
    const h = getRandomNumber(
      Math.max(MIN_LENGTH, toInt(height * MIN_LENGTH_RATIO)),
      toInt(height * MAX_LENGTH_RATIO)
    );
    if (x + w + OFFSET >= width || y + h + OFFSET >= height) return;
    for (let i = y; i < y + h; i++) {
      for (let j = x; j < x + w; j++) {
        if (visited[i][j]) return;
      }
    }
    visitVillagePosition({ x, y, w, h });
    return { x, y, w, h };
  };
  let villageCount = 0;
  let tryCount = 0;
  while (villageCount < MAX_VILLAGE_COUNT && tryCount < MAX_TRY_COUNT) {
    const villagePosition = getPosition();
    if (villagePosition) {
      result.push(villagePosition);
      villageCount++;
    }
    tryCount++;
  }
  return result;
};

module.exports = { createVillagePosition };
