const root = document.children[0].children[1];

const getElementById = (id, curNode = root) => {
  if (curNode.id === id) return curNode;
  if (curNode.children.length === 0) return null;

  for (let i = 0; i < curNode.children.length; i++) {
    const node = getElementById(id, curNode.children[i]);
    if (node !== null) return node;
  }
};

const postboxes = [];

const searchPostBoxes = (curNode = map) => {
  if (curNode.tagName === "SPAN") return curNode;
  if (curNode.children.length === 0) return null;
  curNode.children.forEach((childNode) => {
    const temp = searchPostBoxes(childNode);
    if (temp) postboxes.push(temp);
  });
};

/*
지도에서 시작
첫 번째 노드확인 => 자식있을 시 들어감 (재귀)
현재의 노드가 postbox인지 확인 => 맞을 시 배열에 추가 
=> 추가적으로 들어가서 자신이 마지막일 경우 빠져나옴
=> 형제 노드가 있을 경우 형제 노드로 이동해서 들어가도록 함 (재귀)



마을로 가서 그 마을이 우체통이 있는 마을인지 체크
우체통이 있는 마을이면 우체통을 찾아서 배열에 추가
그 안에 마을이 있는지 체크 없으면 나온다.
마을이 있으면 반복
*/

export { getElementById, searchPostBoxes, postboxes };
