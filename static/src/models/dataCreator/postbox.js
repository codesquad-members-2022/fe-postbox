import { POSTBOX_RANGE } from "../../constant.js";
import { getRandomNumber } from "../../utils/util.js";

const getPostboxNumber = () => {
  const postboxNumber = getRandomNumber(POSTBOX_RANGE.number.min, POSTBOX_RANGE.number.max);
  return postboxNumber;
};

const getPostboxLength = (townDataNumber) => {
  const postboxLengthList = new Array(townDataNumber).map(() => {
    const postboxLength = getRandomNumber(POSTBOX_RANGE.length.min, POSTBOX_RANGE.length.max);
    return postboxLength;
  });
  return postboxLengthList;
};

export const updatePostboxNumber = (postboxData) => {
  postboxData.number = getPostboxNumber();
};

export const updatePostboxLength = (townData) => {
  townData.length = getPostboxLength(townData.number);
};
