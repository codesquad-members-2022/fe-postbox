import Village from "./src/services/village.js";
import Controller from "./src/services/controller.js";

const MAP_SIZE = 600;

const villageController = new Controller(MAP_SIZE);
villageController.initService();

const makeBox = () => {
  for (const villageInfo of villageController.villageContainer) {
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
