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

const getPostboxTownIndice = (postboxNumber, townNumber) => {
  const postboxTownIndice = new Set();
  while (postboxTownIndice.size < postboxNumber) {
    const postboxTownIndex = getRandomNumber(0, townNumber - 1);
    postboxTownIndice.add(postboxTownIndex);
  }
  return [...postboxTownIndice];
};

export const updatePostboxNumber = (postboxData) => {
  postboxData.number = getPostboxNumber();
};

export const updatePostboxLength = (postboxData) => {
  postboxData.length = getPostboxLength(postboxData.number);
};

export const updatePostboxTownIndice = (postboxData, townDataNumber) => {
  postboxData.postboxTownIndex = getPostboxTownIndice(postboxData.number, townDataNumber);
};
