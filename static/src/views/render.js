import { getElementByClassName, getElementsByClassName } from "../utils/util.js";
import { Postbox } from "./components/postbox.js";
import { getPostboxTownNames, getPostboxSizeRank } from "./components/postboxInfo.js";
import { Town } from "./components/town.js";

const getTownMapTemplate = (townData, postboxData) => {
  const { name, width, height, coordinate, postboxTowns } = townData;
  let postboxIndex = 0;
  const townMapTemplate = name.reduce((townsTemplate, _, townIndex) => {
    const town = new Town(name[townIndex], width[townIndex], height[townIndex], coordinate[townIndex]);
    let [className, postboxTemplate] = ["", "", ""];
    if (postboxTowns[townIndex]) {
      const postbox = new Postbox(postboxData.length[postboxIndex]);
      className = "postboxTown";
      postboxTemplate = postbox.getTemplate();
      postboxIndex++;
    }
    return (townsTemplate += town.getTemplate(className, postboxTemplate));
  }, "");
  return townMapTemplate;
};

export const renderTownMap = (townData, postboxData) => {
  const $map = getElementByClassName(document.body, "map");
  const townMapTemplate = getTownMapTemplate(townData, postboxData);
  $map.innerHTML = townMapTemplate;
};

export const findPostboxTowns = () => {
  const $map = getElementByClassName(document.body, "map");
  const $postboxTowns = getElementsByClassName($map, "postbox-town");
  $postboxTowns.forEach((postboxTown) => postboxTown.classList.add("postbox-town--active"));
};

export const printPostboxInfo = (postboxData) => {
  const $postboxButtonWrap = getElementByClassName(document.body, "postbox-button-wrap");
  const $postboxInfoText = getElementByClassName($postboxButtonWrap, "postbox-info-text");
  const postboxTownNames = getPostboxTownNames(postboxData.postboxInfo);
  const postboxSizeRank = getPostboxSizeRank(postboxData.postboxInfo);
  const postboxTownNamesText = `${postboxTownNames.join(", ")} 총 ${postboxTownNames.length}개의 마을입니다.`;
  const postboxSizeRankText = `우체통은 크기가\n${postboxSizeRank} 순입니다.`;
  $postboxInfoText.innerText = `${postboxTownNamesText}\n\n${postboxSizeRankText}`;
};
