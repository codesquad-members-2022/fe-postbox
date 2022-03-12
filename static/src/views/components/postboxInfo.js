const mergePostboxTownNameArr = (leftArr, rightArr) => {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex].length > rightArr[rightIndex].length) {
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
};

const mergeSortPostbox = (postboxTownArr) => {
  if (postboxTownArr.length <= 1) return postboxTownArr;

  const mid = Math.floor(postboxTownArr.length / 2);
  const leftArr = mergeSortPostbox(postboxTownArr.slice(0, mid));
  const rightArr = mergeSortPostbox(postboxTownArr.slice(mid));
  const sortedPostboxTownNameArr = mergePostboxTownNameArr(leftArr, rightArr);

  return sortedPostboxTownNameArr;
};

export const getPostboxTownNames = (postboxInfo) => {
  const postboxTownNames = postboxInfo.map((info) => info.townName);
  return postboxTownNames;
};

export const getPostboxSizeRank = (postboxInfo) => {
  const postboxSizeRank = mergeSortPostbox(postboxInfo)
    .map((el) => el.townName)
    .join(", ");
  return postboxSizeRank;
};
