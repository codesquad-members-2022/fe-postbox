import {
  findParentNode,
  findTownName,
  getClassName,
  getClassNameAll,
} from "./utils.js";

export function showResult() {
  const $townResult = getClassName(document.body, "show-result__count-town");
  const $postBoxResult = getClassName(document.body, "show-result__post-box");
  const $townMap = getClassName(document, "town-map");
  const postBoxArr = getClassNameAll($townMap, "post-box");
  //   const townWithPostBoxArr = findTownName(postBoxArr);
  //   const townNames = townWithPostBoxArr.map(
  //     ($town) => getClassName($town, "town__name").innerHTML
  //   );
  //   $townResult.innerHTML = `우체통이 있는 마을은 총 ${
  //     townNames.length
  //   }개입니다. ${townNames.length !== 0 ? `(${townNames.join(", ")})` : ""} `;
  const townWithPostBox = postBoxArr.map((el) => {
    const parentNode = findParentNode(el);
    const postBoxfontSize = el.style.fontSize;
    return {
      townName: getClassName(parentNode, "town__name").innerHTML,
      postBoxSize: postBoxfontSize.slice(0, postBoxfontSize.length - 2),
    };
  });
  const orderedTownWithPostBox = [...townWithPostBox].sort(
    (a, b) => b.postBoxSize - a.postBoxSize
  );
  console.log(orderedTownWithPostBox);

  console.log(townWithPostBox);
}
