// 구현중
function traverseDOM(node) {
  function search(node) {
    let nodeList = node;
    for (let i = 0; i < nodeList.childNodes.length; i++) {
      console.log(nodeList.childNodes[i]);
      search(nodeList.childNodes[i]);
    }
  }
  search(node);
}

traverseDOM(document);
