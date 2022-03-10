import { mailboxEventHandler } from "./event/mailboxEvent.js";
import { renderMapCell } from "./render.js";
import { getElementByClassName } from "./util/dom-lib.js";

const init = () => {
  renderMapCell();
  const $mailboxBtn = getElementByClassName("mailbox-btn");
  $mailboxBtn.addEventListener("click", mailboxEventHandler);
};

init();
