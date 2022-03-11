import {
  renderTownInfo,
  renderMailboxInfo,
  changeTownsColor,
} from "./render.js";
import { getDatasetNames, getElementByClassName } from "./utils.js";

function handleCheckBtn(e) {
  const hasMailboxSize = (town) => town.dataset.mailboxSize !== "null";
  const townNodes = getElementByClassName("contents").childNodes;
  const mailboxTowns = Array.from(townNodes).filter(hasMailboxSize);

  const descendingByMailboxSize = (a, b) =>
    b.dataset.mailboxSize - a.dataset.mailboxSize;

  const townNames = getDatasetNames(mailboxTowns);
  renderTownInfo(townNames);
  mailboxTowns.sort(descendingByMailboxSize);
  const sortedTownNames = getDatasetNames(mailboxTowns);
  renderMailboxInfo(sortedTownNames);

  const delay = (ms) =>
    new Promise((res) => {
      setTimeout(() => res(), ms);
    });

  delay(2000).then(() => changeTownsColor(mailboxTowns));
}

export { handleCheckBtn };
