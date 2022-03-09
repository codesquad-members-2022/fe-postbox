import { TownManager } from "./TownManager.js";
import { sizeMap, renderTown } from "./render.js";
import { addCheckBtnEvent } from "./event.js";

function init() {
  sizeMap();
  const manager = new TownManager();
  manager.makeTowns();
  manager.nameTowns();
  manager.towns.forEach(renderTown);
  addCheckBtnEvent();
}

init();
