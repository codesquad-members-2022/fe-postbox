import {
  assignStyles,
  findParentNode,
  getClassName,
  getClassNameAll,
  quickSortwithObj,
} from "./utils.js";

function getTownNames(townArr) {
  return townArr.map((element) => element.townName);
}

function showResult(townNames, orderedTownNames) {
  const $townResult = getClassName(document.body, "show-result__count-town");
  const $postBoxResult = getClassName(document.body, "show-result__post-box");
  $townResult.innerHTML = `우체통이 있는 마을은 총 ${
    townNames.length
  }개입니다. ${townNames.length !== 0 ? `(${townNames.join(", ")})` : ""} `;
  orderedTownNames.length !== 0 &&
    ($postBoxResult.innerHTML = `우체통의 크기는 ${orderedTownNames.join(
      ", "
    )} 순입니다. `);
}

export function renderResult() {
  const $townMap = getClassName(document, "town-map");
  const postBoxArr = getClassNameAll($townMap, "post-box");
  const townWithPostBox = postBoxArr.map((el) => {
    const parentNode = findParentNode(el);
    assignStyles(parentNode, { border: "4px solid red" });
    const postBoxfontSize = el.style.fontSize;
    return {
      townName: getClassName(parentNode, "town__name").innerHTML,
      postBoxSize: postBoxfontSize.slice(0, postBoxfontSize.length - 2),
    };
  });

  const orderedTownWithPostBox = quickSortwithObj(
    [...townWithPostBox],
    "postBoxSize"
  );
  const townNames = getTownNames(townWithPostBox);
  const orderedTownNames = getTownNames(orderedTownWithPostBox);
  showResult(townNames, orderedTownNames);
}
