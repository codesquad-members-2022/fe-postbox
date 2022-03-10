import { DataGenerator } from "./data-generator.js";
import {
  getElementByClassName,
  getElementsByClassName,
} from "./util/dom-lib.js";

export const renderMapCell = () => {
  const generator = new DataGenerator();

  getElementsByClassName("map-cell").forEach((cell) => {
    const data = generator.createTownData();
    cell.append(DataGenerator.createTownNode(data));
  });
};

export const renderMailboxInfo = (towns, sortedTowns) => {
  const $info = getElementByClassName("info");
  $info.innerHTML = `
  <p>${towns.join(", ")} 총 ${towns.length}개의 마을입니다.</p>
  <p>우체통의 크기는 ${sortedTowns.join(", ")} 순 입니다.</p>`;
};
