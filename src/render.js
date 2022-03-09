import { MAP_SIZE } from "./constants.js";

function renderTownInfo(towns) {
  const postboxInfoEl = document.querySelector('.postbox-info');
  postboxInfoEl.innerText = `${towns.join(', ')} 총 ${towns.length} 개의 마을입니다.`
}

//TODO: Size 순으로 정렬해서 렌더링
function renderMailboxInfo(towns) {
  const postboxInfoEl = document.querySelectorAll('.postbox-info')[1];
  postboxInfoEl.innerText = `우체통의 크기는 ${towns.join(', ')} 순입니다.`
}

function sizeMap() {
  const contentsEl = document.querySelector(".contents");
  contentsEl.style.width = `${MAP_SIZE.MAX}px`
  contentsEl.style.height = `${MAP_SIZE.MAX}px`
}

function renderTown(town) {
  const contentsEl = document.querySelector(".contents");
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
  townEl.dataset.mailbox = town.mailBox;
  townEl.appendChild(createTownNameElem(town));
  townEl.appendChild(createMailboxElem(town));
  return townEl;
}

function createMailboxElem(town) {
  const mailboxEl = document.createElement("span");
  mailboxEl.innerText = town.mailBox ? "📮" : "";
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

export { renderTown, sizeMap, renderTownInfo, renderMailboxInfo }
