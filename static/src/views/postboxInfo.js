import { getElementByClassName } from "../utils/util.js";

export class PostboxInfo {
  getPostboxTownNames(postboxInfo) {
    const postboxTownNames = postboxInfo.map((info) => info.townName);
    return postboxTownNames;
  }

  mergePostboxTownNameArr(leftArr, rightArr) {
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex].width > rightArr[rightIndex].width) {
        results.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        results.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < leftArr.length) {
      results.push(leftArr[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < rightArr.length) {
      results.push(rightArr[rightIndex]);
      rightIndex++;
    }
    return results;
  }

  mergeSortPostbox(postboxTownArr) {
    if (postboxTownArr.length <= 1) return postboxTownArr;

    const mid = Math.floor(postboxTownArr.length / 2);
    const leftArr = this.mergeSortPostbox(postboxTownArr.slice(0, mid));
    const rightArr = this.mergeSortPostbox(postboxTownArr.slice(mid));
    const sortedPostboxTownNameArr = this.mergePostboxTownNameArr(leftArr, rightArr);

    return sortedPostboxTownNameArr;
  }

  getPostboxSizeRank(postboxInfo) {
    const postboxSizeRank = this.mergeSortPostbox(postboxInfo)
      .map((el) => el.townName)
      .join(", ");
    return postboxSizeRank;
  }

  printPostboxInfo(postboxData) {
    const $postboxButtonWrap = getElementByClassName(document.body, "postbox-button-wrap");
    const $postboxInfoText = getElementByClassName($postboxButtonWrap, "postbox-info-text");
    const postboxTownNames = this.getPostboxTownNames(postboxData.postboxInfo);
    const postboxSizeRank = this.getPostboxSizeRank(postboxData.postboxInfo);
    const postboxTownNamesText = `${postboxTownNames.join(", ")} 총 ${postboxTownNames.length}개의 마을입니다.`;
    const postboxSizeRankText = `우체통은 크기가\n${postboxSizeRank} 순입니다.`;
    $postboxInfoText.innerText = `${postboxTownNamesText}\n\n${postboxSizeRankText}`;
  }
}
