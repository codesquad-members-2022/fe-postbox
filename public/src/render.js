import { getElementByClassName } from "./utils.js";

const MAP_SIZE = {
  MIN: 0,
  MAX: 1000,
};

function changeBorderColor({ el, color }) {
  el.style.borderColor = color;
}

function changeTownsColor(towns) {
  towns.forEach((town) => changeBorderColor({ el: town, color: "var(--red)" }));
}

function renderTownInfo(towns) {
  const postboxInfoEl = getElementByClassName("mailbox-names");
  postboxInfoEl.innerText = `${towns.join(", ")} 총 ${
    towns.length
  } 개의 마을입니다.`;
}

// TODO: Size 순으로 정렬해서 렌더링
function renderMailboxInfo(towns) {
  const postboxInfoEl = getElementByClassName("mailbox-sizes");
  postboxInfoEl.innerText = `우체통의 크기는 ${towns.join(", ")} 순입니다.`;
}

function sizeMap() {
  const contentsEl = getElementByClassName("contents");
  contentsEl.style.width = `${MAP_SIZE.MAX}px`;
  contentsEl.style.height = `${MAP_SIZE.MAX}px`;
}

function renderTown(town) {
  const contentsEl = getElementByClassName("contents");
  const townEl = createTownElem(town);
  contentsEl.appendChild(townEl);
}

function createTownElem(town) {
  const townEl = document.createElement("div");
  townEl.style.width = `${town.width}px`;
  townEl.style.height = `${town.height}px`;
  townEl.style.position = "absolute";
  townEl.style.top = `${town.location.y}px`;
  townEl.style.left = `${town.location.x}px`;
  townEl.style.border = "1px solid";
  townEl.dataset.name = town.name;
  townEl.dataset.mailboxSize = town.mailboxSize;
  townEl.appendChild(createTownNameElem(town));
  townEl.appendChild(createMailboxElem(town));
  return townEl;
}

function createMailboxElem(town) {
  const mailboxEl = document.createElement("span");
  mailboxEl.innerText = town.mailboxSize ? "📮" : "";
  return mailboxEl;
}

function createTownNameElem(town) {
  const nameEl = document.createElement("span");
  nameEl.style.position = "relative";
  nameEl.style.left = `${town.width / 2 - 5}px`;
  nameEl.style.bottom = `25px`;
  nameEl.innerText = town.name;
  return nameEl;
}

export {
  renderTown,
  sizeMap,
  renderTownInfo,
  renderMailboxInfo,
  changeBorderColor,
  changeTownsColor,
};
