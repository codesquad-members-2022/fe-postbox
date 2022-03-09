import { TownManager } from "./TownManager.js";
import { sizeMap, renderTown } from "./render.js";

function init() {
    sizeMap()
    const manager = new TownManager();
    manager.makeTowns();
    manager.nameTowns();
    manager.towns.forEach(renderTown);
}

init();
