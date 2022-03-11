import { COLOR_DELAY_TIME_MS } from "./constants.js";
import {
  renderTownInfo,
  renderMailboxInfo,
  changeTownsColor,
} from "./render.js";
import { delay, getDatasetNames, getElementByClassName, descendByMailboxSize } from "./utils.js";

function handleCheckBtn(e) {
  const hasMailboxSize = (town) => town.dataset.mailboxSize !== "null";
  const townNodes = getElementByClassName("contents").children;
  const townNodesHaveMailbox = Array.from(townNodes).filter(hasMailboxSize);
  const townNames = getDatasetNames(townNodesHaveMailbox);

  renderTownInfo(townNames);

  const descTownNodesHaveMailbox = descendByMailboxSize(townNodesHaveMailbox);
  const sortedTownNames = getDatasetNames(descTownNodesHaveMailbox);

  renderMailboxInfo(sortedTownNames);

  delay(COLOR_DELAY_TIME_MS).then(() => changeTownsColor(townNodesHaveMailbox));
}

export { handleCheckBtn };
