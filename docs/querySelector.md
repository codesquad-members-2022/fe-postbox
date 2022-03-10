# DOM

![image](https://user-images.githubusercontent.com/75062526/157084614-5cd473d1-50ef-4dd0-8940-3ae3ad9791d4.png)

- 문서 노드
    - 최상위 루트 노드, document 객체를 가리킨다.
- 요소 노드
    - html 요소를 가리키는 객체
- 어트리뷰트 노드
    - html 요소 노드와 연결되어 있다
    - 요소 노드의 형제가 아니다(왜 요소 노드의 자식이라고 부르지 않지?)
    - 요소 노드에 먼저 접근을 해야 참조가 가능하다
- 텍스트 노드
    - html 요소의 텍스트를 가리키는 객체
    - 요소 노드의 자식 노드
    - 텍스트 노드는 자식 노드를 가질 수 없다 ⇒ 리프 노드, dom 트리의 최종단
    - 부모인 요소 노드에 접근해야 참조가 가능하다
    
> [DOM 탐색하기](https://ko.javascript.info/dom-navigation)

![image](https://user-images.githubusercontent.com/75062526/157084681-01b34bfd-f446-4021-b62f-15677357700e.png)
> 사진출처 : 자바스크립트 딥 다이브


# DFS

> [1분으로 보는 DFS/BFS 구현 방법](https://www.youtube.com/watch?v=CUTXL4NFTGE)

> [JavaScript로 Tree 구현하고 BFS, DFS로 탐색하기](https://velog.io/@devjade/JavaScript%EB%A1%9C-Tree-%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0-BFS-DFS%EB%A1%9C-%ED%83%90%EC%83%89%ED%95%98%EA%B8%B0)

![image](https://user-images.githubusercontent.com/75062526/157084956-a0307823-4c51-4b03-a248-8b9eb565aa9d.png)

```jsx
// Depth-first Search(깊이 우선 탐색)
  // 1. Pre-Order traversal(전위 순회)
  preOrder() {
    const finalData = [];
    function traverse(node) {
      //finalData.push(node); 순서출력 아니니 필요없을 듯
      if(node.left) {
			//여기에 if(클래스, 아이디, 요소가 맞다) return
        traverse(node.left);
      }
      if(node.right) {
			//여기에 if(클래스, 아이디, 요소가 맞다) return
        traverse(node.right);
      }
    }
    traverse(this.root);
    return finalData;
  }

	//리턴 대신 배열에 찾은 걸 넣게해서 완전 탐색하면 querySelectorAll
```

> 출처 : [ukcasso code](https://ukcasso.tistory.com/12)

![image](https://user-images.githubusercontent.com/75062526/157151572-0a0b9181-2d10-45b8-9df2-da8ad3c29500.png)

![image](https://user-images.githubusercontent.com/75062526/157151655-dfc45aee-a29f-4c44-8b85-de544d3194e5.png)