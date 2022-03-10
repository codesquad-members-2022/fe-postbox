const renderTown = (town, node, positionData) => {
    const { width, height } = town;
    const { left, bottom } = positionData;
    let innerHtml = `<div class="town" style="width:${width}; height:${height}; left: ${left}; bottom: ${bottom}"></div>`
    node.insertAdjacentHTML('beforeend', innerHtml);
}

const placeTown = (parent, currTown, node, DataArr) => {
  for (let limit = 0; limit < 1000; limit++) {
    const currentData = getPosInfo(parent, currTown);
    let checkCnt = 0; //겹치는 개수를 카운트
  
    if (DataArr.length === 0) {
      DataArr.push(currentData);
      renderTown(currTown, node, currentData);
      return;
    } else {
      DataArr.forEach(element => {
        const widthAbs = Math.abs(element.standardLeft - currentData.standardLeft);
        const heightAbs = Math.abs(element.standardBottom - currentData.standardBottom);
        const longerWidth = element.standardLeft - currentData.standardLeft > 0 ? element.standardLeft - element.left : currentData.standardLeft - currentData.left;
        const longerHeight = element.standardBottom - currentData.standardBottom > 0 ? element.standardBottom - element.bottom : currentData.standardBottom - currentData.bottom;
      
        if (widthAbs < longerWidth && heightAbs < longerHeight) {  
          checkCnt++;
        }
      });

      if (!checkCnt) { //카운트가 0이면 안겹쳤다는 뜻
        DataArr.push(currentData);
        renderTown(currTown, node, currentData);
        return;
      } 
    }
  }
}

const getPosInfo = (parent, currTown) => {
  const positionLeft = Math.random() * (parent.width - currTown.width); 
  const positionBottom = Math.random() * (parent.height - currTown.height);  
  const townPositions = {
    left: positionLeft, 
    bottom: positionBottom,
    standardLeft: positionLeft + currTown.width,
    standardBottom: positionBottom + currTown.height
  }

  return townPositions;
}

export { renderTown, placeTown };



































