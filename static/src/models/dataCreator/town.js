import { TOWN_RANGE } from "../../constant.js";
import { getRandomNumber } from "../../utils/util.js";

const getTownNumber = (postboxNumber) => {
  const townNumber = getRandomNumber(postboxNumber, TOWN_RANGE.number.max);
  return townNumber;
};

const getTownNames = (townNumber) => {
  const initialCharcode = 65;
  let townNames = new Array(townNumber).fill("").map((_, townIndex) => {
    const townName = String.fromCharCode(initialCharcode + townIndex);
    return townName;
  });

  return townNames;
};

const getTownTopLeftCoordinate = () => {
  const townTopCoordinate = getRandomNumber(TOWN_RANGE.coordinate.min, TOWN_RANGE.coordinate.max);
  const townLeftCoordinate = getRandomNumber(TOWN_RANGE.coordinate.min, TOWN_RANGE.coordinate.max);
  return { townTopCoordinate, townLeftCoordinate };
};

const getTownLengthList = (townNumber) => {
  const townLengthList = new Array(townNumber).fill(0).map(() => {
    const townLength = getRandomNumber(TOWN_RANGE.length.min, TOWN_RANGE.length.max);
    return townLength;
  });
  return townLengthList;
};

const getTownCoordinates = (townNumber, townWidthList, townHeightList) => {
  const townCoordinates = new Array(townNumber).fill({}).map((_, townIndex) => {
    const { townTopCoordinate, townLeftCoordinate } = getTownTopLeftCoordinate();
    const townRightCoordinate = townLeftCoordinate + townWidthList[townIndex];
    const townBottomCoordinate = townTopCoordinate + townHeightList[townIndex];
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
  let parentTownIndex;
  let oldParentTownCoordinate;
  for (let nextTownIndex = 0; nextTownIndex < townsCoordinates.length; nextTownIndex++) {
    const parentTownCoordinate = townsCoordinates[nextTownIndex];
    if (nextTownIndex === childTownIndex) continue;
    if (
      parentTownCoordinate.left <= childTownCoordinate.left &&
      childTownCoordinate.left <= parentTownCoordinate.right &&
      parentTownCoordinate.top <= childTownCoordinate.top &&
      childTownCoordinate.top <= parentTownCoordinate.bottom
    ) {
      if (
        parentTownIndex !== undefined &&
        oldParentTownCoordinate.top >= parentTownCoordinate.top &&
        oldParentTownCoordinate.left >= parentTownCoordinate.left
      )
        continue;
      parentTownIndex = nextTownIndex;
      oldParentTownCoordinate = townsCoordinates[nextTownIndex];
    }
  }
  return parentTownIndex === undefined ? singleTownIndex : parentTownIndex;
};

const getParentTownIndice = (townsCoordinates) => {
  const parentTownIndice = townsCoordinates.map((childTownCoordinate, childTownIndex) => {
    const parentTownIndex = hasParentTown(townsCoordinates, childTownCoordinate, childTownIndex);
    return parentTownIndex;
  });
  return parentTownIndice;
};

const getPostboxTowns = (townNumber, postboxNumber) => {
  const postboxTownIndice = new Set();
  const postboxTowns = new Array(townNumber).fill(false);
  while (postboxTownIndice.size < postboxNumber) {
    const postboxTownIndex = getRandomNumber(0, townNumber - 1);
    if (postboxTownIndice.has(postboxTownIndex)) continue;
    postboxTowns[postboxTownIndex] = true;
    postboxTownIndice.add(postboxTownIndex);
  }
  return postboxTowns;
};

const getAbsolutePostion = (townsCoordinates, parentTownIndice, postboxTowns, postboxTownLengthList) => {
  const absolutePostions = townsCoordinates.map((townsCoordinate, townIndex) => {
    const absolutePosition = {
      top: 0,
      left: 0,
    };
    let postboxLengthIndex = 0;
    const parentTownIndex = parentTownIndice[townIndex];
    if (parentTownIndex === -1) {
      absolutePosition.top = townsCoordinate.top;
      absolutePosition.left = townsCoordinate.left;
    } else {
      absolutePosition.top = townsCoordinate.top - townsCoordinates[parentTownIndex].top;
      absolutePosition.left = townsCoordinate.left - townsCoordinates[parentTownIndex].left;
      if (postboxTowns[townIndex]) {
        absolutePosition.top -= postboxTownLengthList[postboxLengthIndex];
        absolutePosition.top -= postboxTownLengthList[postboxLengthIndex];
        postboxLengthIndex++;
      }
    }
    return absolutePosition;
  });
  return absolutePostions;
};

export const updateTownNumber = (townData, postboxNumber) => {
  townData.number = getTownNumber(postboxNumber);
};

export const updateTownNames = (townData) => {
  townData.name = getTownNames(townData.number);
};

export const updateTownWidth = (townData) => {
  townData.width = getTownLengthList(townData.number);
};

export const updateTownHeight = (townData) => {
  townData.height = getTownLengthList(townData.number);
};

export const updateTownCoordinates = (townData) => {
  townData.coordinate = getTownCoordinates(townData.number, townData.width, townData.height);
};

export const updateParentTownIndice = (townData) => {
  townData.parentTownIndex = getParentTownIndice(townData.coordinate);
};

export const updatePostboxTowns = (townData, postboxNumber) => {
  townData.postboxTowns = getPostboxTowns(townData.number, postboxNumber);
};

export const updateAbsolutePostion = (townData, postboxTownLengthList) => {
  townData.absolutePosition = getAbsolutePostion(
    townData.coordinate,
    townData.parentTownIndex,
    townData.postboxTowns,
    postboxTownLengthList
  );
};
