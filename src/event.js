import { handleCheckBtn } from "./handler.js";

function addCheckBtnEvent() {
    const checkBtnEl = document.querySelector('.check-btn');
    checkBtnEl.addEventListener('click', handleCheckBtn);
}

export { addCheckBtnEvent }
