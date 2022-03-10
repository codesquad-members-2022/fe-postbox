// {
//   name: String.fromCharCode(this.ASCII++),
//   size: {
//     width: townWidth,
//     height: townHeight,
//   },
//   position: {
//     left: getRandomNumber(MIN.POSITION, MAX.WIDTH - townWidth),
//     top: getRandomNumber(MIN.POSITION, MAX.HEIGHT - townHeight),
//   },
//   mailbox: {
//     size: getRandomNumber(MIN.MAILBOX_SIZE, MAX.MAILBOX_SIZE),
//     isExist: getRandomNumber(MIN.MAILBOX_EXIST, MAX.MAILBOX_EXIST),
//   },
//   children: this.createChildren(depth),
// };

export class Town {
  constructor({ name, size, position, mailbox }) {
    this.name = name;
    this.size = size;
    this.position = position;
    this.mailbox = mailbox;
  }

  template() {
    return `<div class="town">
              <h2 class="town-title">${this.name}</h2>
              ${
                this.mailbox.isExist === 1
                  ? `<span class="mailbox" data-size="${this.mailbox.size}">📮</span>`
                  : ""
              }
            </div>`;
  }
}

// const data = [
//   {
//     val: 1,
//     children: [
//       {
//         val: 2,
//         children: [
//           {
//             val: 3,
//             children: [
//               {
//                 val: 4,
//                 children: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         val: 5,
//         children: [
//           {
//             val: 6,
//             children: [
//               {
//                 val: 7,
//                 children: [],
//               },
//             ],
//           },
//           {
//             val: 8,
//             children: [],
//           },
//         ],
//       },
//       {
//         val: 9,
//         children: [
//           {
//             val: 10,
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

// class Tree {
//   constructor(value) {
//     // constructor로 만든 객체는 트리의 Node가 된다.
//     this.value = value;
//     this.children = []; // 자식노드들도 객체형태인데 이 노드들을 담을 배열
//   }

//   // 노드를 삽입하는 메소드
//   insertNode(value) {
//     const childNode = new Tree(value); //인스턴스 객체(=자식노드) 생성
//     this.children.push(childNode); //자식노드를 푸시
//   }

//   // 트리 안에 해당 값이 포함되어 있는지 확인하는 메소드
//   contains(value) {
//     if (this.value === value) {
//       return true;
//     }
//     // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
//     else {
//       for (let i = 0; i < this.children.length; i++) {
//         const childNode = this.children[i];
//         if (childNode.contains(value)) {
//           //자식노드들이 value를
//           return true;
//         }
//       }
//     }
//     // 전부 탐색했음에도 true가 나오지 않는다면 마지막엔 false 반환
//     return false;
//   }
// }

// const getTree = (datas) => {
//   const rootNode = new Tree(datas[0].val);

//   const addNode = (node, data) => {
//     for (let i = 0; i < data.children.length; i++) {
//       node.insertNode(data.children[i].val);
//       addNode(node.children[i], data.children[i]);
//     }
//   };

//   addNode(rootNode, data[0]);

//   return rootNode;
// };

// console.log(getTree(data));
