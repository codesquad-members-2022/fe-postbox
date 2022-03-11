import { TOWN_RANGE } from "../../constant.js";
import { getRandomNumber } from "../../utils/util.js";
import { townData } from "../data/town.js";

const getTownNumber = (postboxNumber) => {
  const townNumber = getRandomNumber(postboxNumber, TOWN_RANGE.length.max);
  return townNumber;
};

const getTownNames = (townNumber) => {
  const initialCharcode = 65;
  const townNames = new Array(townNumber).map((_, townIndex) => String.fromCharCode(initialCharcode + townIndex));
  return townNames;
};

const getTownLengthList = (townNumber) => {
  const townLengthList = new Array(townNumber).map(() => {
    const townLength = getRandomNumber(TOWN_RANGE.length.min, TOWN_RANGE.length.max - townLeftCoordinate);
    return townLength;
  });
  return townLengthList;
};

const getTownTopLeftCoordinate = () => {
  const townTopCoordinate = getRandomNumber(TOWN_RANGE.coordinate.min, TOWN_RANGE.coordinate.max);
  const townLeftCoordinate = getRandomNumber(TOWN_RANGE.coordinate.min, TOWN_RANGE.coordinate.max);
  return { townTopCoordinate, townLeftCoordinate };
};

const getTownCoordinates = (townNumber, townLengthList) => {
  const townCoordinates = new Array(townNumber).map((_, townIndex) => {
    const { townTopCoordinate, townLeftCoordinate } = getTownTopLeftCoordinate();
    const { townWidth, townHeight } = townLengthList[townIndex];
    const townRightCoordinate = townLeftCoordinate + townWidth;
    const townBottomCoordinate = townTopCoordinate + townHeight;
    const townCoordinate = {
      top: townTopCoordinate,
      right: townRightCoordinate,
      bottom: townBottomCoordinate,
      left: townLeftCoordinate,
    };
    return townCoordinate;
  });
  return townCoordinates;
};

const hasParentTown = (townsCoordinates, childTownCoordinate, childTownIndex) => {
  const singleTownIndex = -1;
  for (let parentTownIndex = 0; parentTownIndex < townsCoordinates.length; parentTownIndex++) {
    const parentCoordinate = townsCoordinates[parentTownIndex];
    if (parentTownIndex !== childTownIndex) continue;
    if (parentCoordinate.left <= childTownCoordinate.left && childTownCoordinate.left >= parentTownCoordinate.right)
      return parentTownIndex;
  }
  return singleTownIndex;
};

const getParentTownIndice = (townsCoordinates) => {
  const parentTownIndice = townsCoordinates.map((childTownCoordinate, childTownIndex) => {
    const parentTownIndex = hasParentTown(townsCoordinates, childTownCoordinate, childTownIndex);
    return parentTownIndex;
  });
  return parentTownIndice;
};

export const updateTownNumber = (townData, postboxNumber) => {
  townData.number = getTownNumber(postboxNumber);
};

export const updateTownNames = (townData) => {
  townData.name = getTownNames(length);
};

export const updateTownWidth = (townData) => {
  townData.width = getTownLengthList(length);
};

export const updateTownHeight = (townData) => {
  townData.height = getTownLengthList(length);
};

export const updateTownCoordinates = (townData) => {
  townData.coordinate = getTownCoordinates(townData.length, townData.width, townData.height);
};

export const updateParentTownIndice = (townData) => {
  townData.parentTownIndex = getParentTownIndice(coordinate);
};
