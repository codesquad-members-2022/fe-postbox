import { sizeMap, renderTown } from "./render.js";
import { addCheckBtnEvent } from "./event.js";

async function init() {
  sizeMap();

  const towns = await fetch("http://localhost:3000/towns").then((res) =>
    res.json()
  );

  towns.forEach(renderTown);
  addCheckBtnEvent();
}

init();
