import {
  renderTownInfo,
  renderMailboxInfo,
  changeBorderColor,
} from "./render.js";
import { getDatasetNames } from "./utils.js";

function handleCheckBtn(e) {
  const hasMailboxSize = (town) => town.dataset.mailboxSize !== "null";
  const sortByMailboxSize = (a, b) =>
    b.dataset.mailboxSize - a.dataset.mailboxSize;
  mailboxTowns.sort(sortByMailboxSize);

  const townNodes = document.querySelector(".contents").childNodes;
  const mailboxTowns = Array.from(townNodes).filter(hasMailboxSize);

  mailboxTowns.forEach((town) =>
    changeBorderColor({ el: town, color: "var(--red)" })
  );

  const townNames = getDatasetNames(mailboxTowns);
  renderTownInfo(townNames);
  const sortedTownNames = getDatasetNames(mailboxTowns);
  renderMailboxInfo(sortedTownNames);
}

export { handleCheckBtn };
