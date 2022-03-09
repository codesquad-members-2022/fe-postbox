const renderTown = (town, node, positionData) => {
    const { width, height } = town;
    const { left, bottom } = positionData;
    let innerHtml = `<div class="town" style="width:${width}; height:${height}; left: ${left}; bottom: ${bottom}">
    <span class="townName">A</span>
    </div>`
    node.insertAdjacentHTML('beforeend', innerHtml);
}

const placeTown = (parent, currTown, node, DataArr) => {
  let i = 0
  while (i < 100) {
    const currentData = getPosInfo(parent, currTown);
    
    if (DataArr.length === 0) {
      DataArr.push(currentData);
      renderTown(currTown, node, currentData);
    } else {
      DataArr.forEach(element => {
        const widthAbs = Math.abs(element.standardLeft - currentData.standardLeft);
        const heightAbs = Math.abs(element.standardBottom - currentData.standardBottom);
      //엘리먼트의 standard들과 currentData의 stanadard들을 비교해서 숫자가 더 큰거의 widht,hegith
      const longerWidth = element.standardLeft - currentData.standardLeft >= 0 ? element.standardLeft : currentData.standardLeft;
      const longerHeight = element.standardBottom - currentData.standardBottom >= 0 ? element.standardBottom : currentData.standardBottom;
      
      if (!(widthAbs < longerWidth && heightAbs < longerHeight)) {  
        //안겹친다
        DataArr.push(currentData);
        renderTown(currTown, node, currentData);
        return;
      }
    });
    i++;
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




