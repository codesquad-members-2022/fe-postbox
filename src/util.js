class TraverseDOM {
  static querySelector(node, findClass) {
    let result;
    function search(node, findClass) {
      let nodeList = node;
      for (let i = 0; i < nodeList.childNodes.length; i++) {
        // 해당 엘리먼트노드에 클래스가 있는지 확인
        if (nodeList.childNodes[i].className) {
          if (nodeList.childNodes[i].classList.contains(findClass)) {
            result = nodeList.childNodes[i];
          }
        }
        search(nodeList.childNodes[i], findClass);
      }
    }
    search(node, findClass);

    return result;
  }

  static querySelectorAll(node, findClass) {
    let result = [];
    function search(node, findClass) {
      let nodeList = node;
      for (let i = 0; i < nodeList.childNodes.length; i++) {
        if (nodeList.childNodes[i].className) {
          if (nodeList.childNodes[i].classList.contains(findClass)) {
            result.push(nodeList.childNodes[i]);
          }
        }
        search(nodeList.childNodes[i], findClass);
      }
    }
    search(node, findClass);

    return result;
  }
}

function getRandom(max, min) {
  return min === undefined ? Math.round(Math.random() * max) : Math.floor(Math.random() * (max - min) + min);
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j].size > arr[j + 1].size) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export { TraverseDOM, getRandom, bubbleSort };
