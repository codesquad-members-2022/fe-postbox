import {
  getElementByClassName,
  getElementsByClassName,
} from "../util/dom-lib.js";
import { delay } from "../util/util.js";
import { renderMailboxInfo } from "../render.js";

export const mailboxEventHandler = () => {
  let towns = [];
  const $towns = getElementsByClassName("town");
  const sortedTowns = $towns
    .filter((town) =>
      [...town.children[0].children].some((child) =>
        child.classList.contains("mailbox")
      )
    )
    .map((town) => {
      delay(2000).then(() => town.classList.add("has-mailbox"));
      towns.push(getElementByClassName("town-title", town).innerText);
      return town;
    })
    .sort(
      (townA, townB) =>
        Number(getElementByClassName("mailbox", townB).dataset.size) -
        Number(getElementByClassName("mailbox", townA).dataset.size)
    )
    .map((town) => getElementByClassName("town-title", town).innerText);

  renderMailboxInfo(towns, sortedTowns);
};
