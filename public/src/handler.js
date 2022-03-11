import { COLOR_DELAY_TIME_MS } from "../../server/constants.js";
import {
  renderTownInfo,
  renderMailboxInfo,
  changeTownsColor,
} from "./render.js";
import { delay, getDatasetNames, getElementByClassName } from "./utils.js";

function handleCheckBtn(e) {
  const hasMailboxSize = (town) => town.dataset.mailboxSize !== "null";
  const townNodes = getElementByClassName("contents").children;
  const townNodesHaveMailbox = Array.from(townNodes).filter(hasMailboxSize);
  const townNames = getDatasetNames(townNodesHaveMailbox);

  renderTownInfo(townNames);
  
  const descendingByMailboxSize = (a, b) =
    b.dataset.mailboxSize - a.dataset.mailboxSize;
  townNodesHaveMailbox.sort(descendingByMailboxSize);

  const sortedTownNames = getDatasetNames(townNodesHaveMailbox);
  renderMailboxInfo(sortedTownNames);

  delay(COLOR_DELAY_TIME_MS).then(() => changeTownsColor(townNodesHaveMailbox));
}

export { handleCheckBtn };
