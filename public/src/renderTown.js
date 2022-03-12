const createTownNameNode = () => {
  const townName = document.createElement('span');
  const townNameText = document.createTextNode('');
  townName.classList.add('town-name');

  townName.appendChild(townNameText);
  return townName;
};

const createPostBoxNode = () => {
  const postBox = document.createElement('img');
  postBox.src = 'public/src/mailbox.png';
  postBox.classList.add('post-box');

  Object.assign(postBox.style, {
    width: 20,
    height: 20,
  });
  return postBox;
};

const createTownInfoNode = town => {
  const townInfo = document.createElement('span');
  const townName = createTownNameNode();

  townInfo.appendChild(townName);
  if (town.postBoxSize) {
    const postBox = createPostBoxNode();
    townInfo.appendChild(postBox);
  }
  return townInfo;
};

const createTownNode = (town, positionData) => {
  const townNode = document.createElement('div');
  townNode.classList.add('town');

  Object.assign(townNode.style, {
    width: town.width,
    height: town.height,
    left: positionData.left,
    bottom: positionData.bottom,
  });

  const townInfo = createTownInfoNode(town);
  townNode.appendChild(townInfo);
  return townNode;
};

const renderTown = (town, townMap, positionData) => {
  const townNode = createTownNode(town, positionData);
  townMap.appendChild(townNode);
};

const getPosInfo = (parent, currTown) => {
  const positionLeft = Math.random() * ((parent.width-6) - currTown.width);
  const positionBottom = Math.random() * ((parent.height-6) - currTown.height);

  const townPositions = {
    left: positionLeft,
    bottom: positionBottom,
    leftDistance: positionLeft + currTown.width,
    bottomDistance: positionBottom + currTown.height,
  };
  return townPositions;
};


const isPossiblePosition = (positionData, currentData, parent) => {
  const fixedWidthAbs = Math.abs(40 - currentData.leftDistance);
  const fixedHeightAbs = Math.abs((parent.height) - currentData.bottomDistance);
  const isCollapseWithInfo = (fixedWidthAbs <= (currentData.leftDistance - currentData.left)) && (fixedHeightAbs <= 34);
  
  if (positionData.length) {    
    for (let i = 0; i < positionData.length; i++) {
      const widthAbs = Math.abs(positionData[i].leftDistance - currentData.leftDistance);
      const heightAbs = Math.abs(positionData[i].bottomDistance - currentData.bottomDistance);
      const longerWidth = positionData[i].leftDistance - currentData.leftDistance > 0 ? positionData[i].leftDistance - positionData[i].left : currentData.leftDistance - currentData.left;
      const longerHeight = positionData[i].bottomDistance - currentData.bottomDistance > 0 ? positionData[i].bottomDistance - positionData[i].bottom : currentData.bottomDistance - currentData.bottom;
      
      //겹친다
      if ((widthAbs <= longerWidth && heightAbs <= longerHeight) || isCollapseWithInfo) {
        return false;
      }
    }
    //포문이 끝났다 = 안겹쳤다
    return true;
  } else {
    if (isCollapseWithInfo) {
      return false;
    } else {
      return true;

    }
  }
};

const placeTown = (parent, currTown, node, positionData, townWithPostBoxes) => {
  for (let limit = 0; limit < 1000; limit++) {
    const currentData = getPosInfo(parent, currTown);
    if (isPossiblePosition(positionData, currentData,parent)) {
      positionData.push(currentData);
      renderTown(currTown, node, currentData);
      if (!(currTown.postBoxSize === 0)) {
        townWithPostBoxes.push(currTown);
      }
      return;
    }
  }
};

export { renderTown, placeTown };
