import Village from "./src/services/village.js";

function getRandomVillageCount() {
  const NUM = 10;
  return Math.random() * NUM + 1;
}

let villageCount = getRandomVillageCount();

const villageContainer = [];

const MAP_SIZE = 600;

for (let i = 0; i < villageCount; i++) {
  const village = new Village(villageContainer, MAP_SIZE);

  villageContainer.push(village.townSize);
}

const makeBox = () => {
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
};

makeBox();
