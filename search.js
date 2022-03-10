const root = document.children[0].children[1];

const getElementById = (id, curNode = root) => {
  if (curNode.id === id) return curNode;
  if (curNode.children.length === 0) return null;

  for (let i = 0; i < curNode.children.length; i++) {
    const node = getElementById(id, curNode.children[i]);
    if (node !== null) return node;
  }
};

const searchPostBoxes = (curNode, postboxes) => {
  if (curNode.tagName === "SPAN") return curNode;
  if (curNode.children.length === 0) return null;

  if (
    curNode.classList.contains("village") &&
    curNode.dataset.hasPostbox === "true"
  ) {
    for (let i = 0; i < curNode.length; i++) {
      const temp = searchPostBoxes(curNode.children[i]);
      if (!temp) {
        postboxes.push(temp);
      }
    }
  }
};

/*
지도에서 시작해서 

마을로 가서 그 마을이 우체통이 있는 마을인지 체크
우체통이 있는 마을이면 우체통을 찾아서 배열에 추가
그 안에 마을이 있는지 체크 없으면 나온다.
마을이 있으면 반복
*/

export { getElementById };
