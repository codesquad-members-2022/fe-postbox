import { POSTBOX_RANGE } from "../../constant.js";
import { getRandomNumber } from "../../utils/util.js";

const getPostboxNumber = () => {
  const postboxNumber = getRandomNumber(POSTBOX_RANGE.number.min, POSTBOX_RANGE.number.max);
  return postboxNumber;
};

const getPostboxLength = (postboxNumber) => {
  const postboxLengthList = new Array(postboxNumber).fill(0).map(() => {
    const postboxLength = getRandomNumber(POSTBOX_RANGE.length.min, POSTBOX_RANGE.length.max);
    return postboxLength;
  });
  return postboxLengthList;
};

const getPostboxInfo = (postboxLengthList, townNames, postboxTowns) => {
  const postboxInfos = [];
  let postboxIndex = 0;
  postboxTowns.forEach((postboxTown, townIndex) => {
    if (postboxTown) {
      const postboxInfo = {
        townName: townNames[townIndex],
        length: postboxLengthList[postboxIndex],
      };
      postboxInfos.push(postboxInfo);
      postboxIndex++;
    }
  });
  return postboxInfos;
};

export const updatePostboxNumber = (postboxData) => {
  postboxData.number = getPostboxNumber();
};

export const updatePostboxLength = (postboxData) => {
  postboxData.length = getPostboxLength(postboxData.number);
};

export const updatePostboxInfo = (postboxData, townNames, postboxTowns) => {
  postboxData.postboxInfo = getPostboxInfo(postboxData.length, townNames, postboxTowns);
};
