import { sizeMap, renderTown } from "./render.js";
import { addCheckBtnEvent } from "./event.js";

async function init() {
  sizeMap();

  const towns = await fetch("https://random-towns.herokuapp.com/towns").then(
    (res) => res.json()
  );

  towns.forEach(renderTown);
  addCheckBtnEvent();
}

init();
