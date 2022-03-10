const renderTown = (town, node, positionData) => {
    const { width, height } = town;
    const { left, bottom } = positionData;
    let innerHtml = `<div class="town" style="width:${width}; height:${height}; left: ${left}; bottom: ${bottom}">
  
    </div>`
    node.insertAdjacentHTML('beforeend', innerHtml);
}

const placeTown = (parent, currTown, node, DataArr) => {
  let k = 0;
  while (true) {
    const currentData = getPosInfo(parent, currTown);
    let count = 0;
    if (k === 1000) {
      return;
    }
    if (DataArr.length === 0) {
      DataArr.push(currentData);
      renderTown(currTown, node, currentData);
      return;
    } else {
      DataArr.forEach(element => {
        const widthAbs = Math.abs(element.standardLeft - currentData.standardLeft);
        const heightAbs = Math.abs(element.standardBottom - currentData.standardBottom);
      //엘리먼트의 standard들과 currentData의 stanadard들을 비교해서 숫자가 더 큰거의 widht,hegith
      const longerWidth = element.standardLeft - currentData.standardLeft > 0 ? element.standardLeft - element.left : currentData.standardLeft - currentData.left;
      const longerHeight = element.standardBottom - currentData.standardBottom > 0 ? element.standardBottom - element.bottom : currentData.standardBottom - currentData.bottom;
        // console.log(element)
      if (widthAbs < longerWidth && heightAbs < longerHeight) {  
        //겹친다
        count++;
      }
    });

    if (!count) {
      DataArr.push(currentData);
      renderTown(currTown, node, currentData);
      return;
    } else {
      k++;
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



































