
import {TownManager} from "./TownManager.js";

const manager = new TownManager();
manager.makeTowns();
manager.towns.forEach((town) => renderTown);
console.log('render')

function renderTown(town) {
    const contentsEl = document.querySelector('.contents')
    const townEl = createTownElem(town)
    console.log(townEl)
    contentsEl.appendChild(townEl)
}

function createTownElem(town) {
    const townEl = document.createElement("div")
    townEl.style.width = town.width;
    townEl.style.height = town.height;
    townEl.style.position = 'relative';
    townEl.style.top = `${town.location.y + town.height}px`
    townEl.style.left = `${town.location.x}px`
    return townEl
}

