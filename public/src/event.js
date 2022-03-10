import { handleCheckBtn } from "./handler.js";
import { getElementByClassName } from "./utils.js";

function addCheckBtnEvent() {
  const checkBtnEl = getElementByClassName("check-btn");
  checkBtnEl.addEventListener("click", handleCheckBtn);
}

export { addCheckBtnEvent };
