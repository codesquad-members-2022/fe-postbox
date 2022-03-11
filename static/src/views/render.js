import { getElementByClassName, getElementsByClassName } from "../utils/util.js";

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
