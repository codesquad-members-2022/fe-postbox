import {
  renderTownInfo,
  renderMailboxInfo,
  changeBorderColor,
} from "./render.js";
import { getDatasetNames } from "./utils.js";

function handleCheckBtn(e) {
  const hasMailboxSize = (town) => town.dataset.mailboxSize !== "null";
  const townNodes = document.querySelector(".contents").childNodes;
  const mailboxTowns = Array.from(townNodes).filter(hasMailboxSize);

  const sortByMailboxSize = (a, b) =>
      b.dataset.mailboxSize - a.dataset.mailboxSize;
  mailboxTowns.sort(sortByMailboxSize);
  const townNames = getDatasetNames(mailboxTowns);
  renderTownInfo(townNames);
  const sortedTownNames = getDatasetNames(mailboxTowns);
  renderMailboxInfo(sortedTownNames);

  //TODO: 함수 분리
  function changeTownsColor(towns) {
    towns.forEach((town) =>
      changeBorderColor({ el: town, color: "var(--red)" })
  )
  };
  // setTimeout 2초
  const delay = new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  })

  delay.then(() => changeTownsColor(mailboxTowns))
}

export { handleCheckBtn };
