import { TownManager } from "./TownManager.js";

const manager = new TownManager();
manager.makeTowns();
manager.nameTowns();
manager.towns.forEach(renderTown);

console.log("manager.towns", manager.towns);

function renderTown(town) {
  const contentsEl = document.querySelector(".contents");
  const townEl = createTownElem(town);
  console.log(townEl);
  contentsEl.appendChild(townEl);
}

function createTownElem(town) {
  const townEl = document.createElement("div");
  townEl.style.width = `${town.width}px`;
  townEl.style.height = `${town.height}px`;
  townEl.style.position = "absolute";
  townEl.style.top = `${town.location.y}px`;
  townEl.style.left = `${town.location.x}px`;
  townEl.style.border = "1px solid";
  townEl.innerText = "📮";
  return townEl;
}
