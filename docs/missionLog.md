#### 우체통 마을 만들기

#### 설계

##### 1. Class 마을

- 상태
  - 위치
  - 우체통 위치
- 메소드
  - getLocation
  - getWidth
  - getHeight
  - get기준점

##### 2. 렌더

- 역할
  - 초기 화면 그리기
  - 빨간색으로 칠하기

#####3. 마을 관리자

- 마을 지도
  - 마을 인스턴스들을 가지고 있음.
  - 랜더함수의 파라미터로 사용됨.
- 마을 지도에 마을, 우체통 추가하는 validator 역할 수행하는 로직.
- Validator
  - 마을을 만들 때 마을 지도안에 있는 위치, 우체통 위치 고려해서 판별.

#####4. 이벤트

- `빨간 우체통 확인` 버튼 누르면 찾는 로직 실행

#####5. 정렬

- 배열의 길이가 10 ~ 20일 경우 선택, 삽입 정렬이 사용된다고 함.

#####6. Promise

#####7. express

- 랜덤한 마을 위치 클라이언트에서 구현 후 나중에 서버에서 처리

#### 구현 checklist

- [x] 랜덤하게 마을 생성하기
  - [x] 랜덤한 기준점, 높이, 너비를 가지도록 생성 - Town Class
  - [x] 각 마을들이 겹치지 않도록 마을 배열 구성 - TownManager Class
    - 정해진 개수의 랜덤 마을 생성 후 기존 마을들과 겹치지 않는 지 확인 후 선별한다.
  - [x] 랜덤하게 우체통을 가지도록 생성 - Town Class
  - [x] 생성된 마을 순서대로 이름 지정 - TownManager Class
- [x] 마을 정보를 활용하여 rendering
  - 구성: 마을 div > 우체통 div, 이름 div
- [x] HTML 추가
- [x] CSS 추가
- [x] querySelector 구현
  - [x] getElementByClassName 구현
- [x] 버튼 이벤트
  - [x] 빨간색으로 변경
- [x] setTimeout에 Promise 패턴 적용
- [x] 폴더 구조 변경
- [ ] 정렬 알고리즘 구현
- [x] 우체통 사이즈 추가
- [x] 서버
  - [x] express 띄우기
  - [x] JSON 생성
  - [x] 마을 위치 랜덤하게 생성하는 로직 서버에서 처리
- [x] JSON fetch
  - 서버로부터 towns 배열을 JSON 으로 받아 render

#### 구현 과정

- 각 마을의 정보를 가지고 있는 Town Class 구현

  - Town Class 는 생성과 동시에 랜덤한 기준점, 높이, 너비, 우체통 유무를 가진다.

  - 기준점은 정해진 MAP_SIZE_MIN MAX 사이에서 생성되도록 한다.

  - 높이와 너비는 정해진 TOWN SIZE 사이에서 생성되도록 한다.

  - 이름 초기 null 로 나중에 선별된 마을에 대해서만 Town Manager 가 부여한다.

- 랜덤값을 구하기 위한 함수는 util.js 에 구현

- 랜덤값의 범위를 지정하기 위한 상수(magic num)는 constants.js 에 작성하여 변수로 만들어 필요한 부분에 사용한다.

- 여러 마을을 생성하고 관리하는 TownManager Class 구현

  - 마을의 기준점, 너비, 높이를 이용하여 4개의 꼭지점 좌표(순서가 정해짐)를 구한다.

    - 이를 이용하여 두 마을이 내부, 외부에 위치하는지 확인할 수 있다.

  - this.towns = [] 배열에 겹치지 않는 마을들을 넣는다.

  - makeTowns 함수를 통해 구현

    - 정해진 RECYCLE_NUMBER 만큼 마을을 생성하고 비교하고 추가한다.

    - 마을 추가

      - 마을을 생성한다.
      - 첫 마을은 towns 배열에 넣고, 그 이후부터 생성된 마을은 기존 towns 의 마을과 겹치는 지 확인한다.

    - 마을 비교

      - 마을이 유효한 지 검사

        - validateTown : 기존 towns 배열의 모든 town 과 겹치는 지 확인한다.

      - 마을이 겹치는 지 확인

        - isOverlap
          - 두 마을을 매개변수로 받아, 각 4개의 꼭지점을 활용하여 확인한다.

          - 1. 마을이 다른 마을의 내부에 위치하는지, 2) 마을이 다른 마을의 외부의 위치하는지 확인

          - 1), 2) 가 모두 아닐 경우에는 겹치는 것이므로 true 반환.

      - 내부에 위치하는 지 확인

        - checkInside
          - 기준이 되는 마을 4개의 꼭지점을 이용하여 x, y 범위를 지정

          - 비교할 마을의 꼭지점을 하나씩 넣어본다.

          - 해당 꼭지점이 기준이 되는 마을의 x 범위 안에 들어가고(&&) y 범위 안에 들어가는지 확인

          - 비교마을의 4개 꼭지점이 모두 범위 안에 들어가면 내부에 있으므로 true, 하나라도 밖이면 false.
        - checkOutside
          - 기준이 되는 마을 4개의 꼭지점을 이용하여 x(최대, 최소), y(최대, 최소) 지정

          - 비교할 마을의 꼭지점을 하나씩 넣어본다.

          - 해당 꼭지점이 기준 마을의 x 최소보다 작거나, 최대보다 크거나 이고 (&&) y 최소보다 작거나, 최대보다 크거나 인지 확인.

          - 비교마을의 4개 꼭지점이 모두 범위 밖이면 외부에 있으므로 true, 하나라도 안이면 false.

  - 우체통과 이름이 마을 영역 안으로 들어가므로 크기를 고려하여 MARGIN 을 넣어 겹친다고 판단하는 범위를 더 크게 한다.
  - 기준점의 범위에 MAX 값에 TOWN_SIZE MAX 값 만큼을 빼준다. 기준점이 맵 끝에 생성되어 마을이 밖으로 벗어나는 것을 방지한다.
  - 이름이 맵 상단에 생성되어 맵을 벗어나는 것을 방지하도록 기준점 y 최소값에 MARGIN 을 준다.

- render
  - TownManger 인스턴스로부터 towns 배열을 받는다.
  - creatElement 와 같은 DOM API 를 통해 div 를 생성.
  - towns 의 기준점, 높이, 너비를 이용하여 스타일을 준다.
    - position absolute 와 기준점을 활용하여 좌표대로 위치시킨다.
    - ```javascript
      townEl.style.width = `${town.width}px`;
      townEl.style.height = `${town.height}px`;
      townEl.style.position = "absolute";
      townEl.style.top = `${town.location.y}px`;
      townEl.style.left = `${town.location.x}px`;
      ```
  - town Element 하위 요소로 우체통, 이름을 넣는다.
    - 우체통과 이름은 span 으로 하여 inline 으로 들어가도록 함.
    - 이름은 마을 요소의 상단 가운데에 위치하도록 스타일 지정
      - ```javascript
        nameEl.style.position = "relative";
        nameEl.style.left = `${town.width / 2 - 5}px`;
        nameEl.style.bottom = `25px`;
        ```
  - 이벤트 핸들러에서 town Div 를 찾고 우체통 유무와 이름을 사용할 수 있도록 dataset 도 부여한다.
    ```javascript
    townEl.dataset.name = town.name;
    townEl.dataset.mailboxSize = town.mailboxSize;
    ```
- TOWN Class 에 우체통 크기 반영
  - 단순히 우체통 유무만 랜덤으로 정해지는 방식에서 True 일 경우 우체통 크기를 랜덤하게 설정하는 방식으로 변경
  ```javascript
  this.mailboxSize = this.getRandomBoolean() ? this.getMailboxSize() : null;
  ```
- 이벤트 설정
  - event.js : 이벤트리스너 모듈로 check-btn 에 click 이벤트 리스너 추가

  - handler.js : 이벤트핸들러 모듈로 check-btn 에 click 발생 시 실행되는 함수

  - 우체통 확인 버튼을 클릭 시 크게 3가지 기능 실행

    - .mailbox-names Div 에 우체통이 있는 마을 이름 rendering
    - .mailbox-sizes Div 에 우체통이 있는 마을의 이름을 우체통 크기 순으로 rendering
    - 우체통이 있는 마을들의 Div Border Color 를 red 로 변경

  - 이를 위해 contents Div 자식요소들을 찾고, mailboxSize 가 !null 인 요소만 filtering 하고, sort 한다.

    ```javascript
    const mailboxTowns = Array.from(townNodes).filter(hasMailboxSize);
    const sortByMailboxSize = (a, b) =>
      b.dataset.mailboxSize - a.dataset.mailboxSize;
    mailboxTowns.sort(sortByMailboxSize);
    ```

  - border color 변경 시 delay 설정
    - promise 패턴 사용하여 delay 2초 후 색 바뀌도록 한다.
    ```javascript
    const delay = new Promise((res, rej) => {
      setTimeout(() => res(), 2000);
    });
    delay.then(() => changeTownsColor(mailboxTowns));
    ```
- 서버 생성
  - server.js : express 활용하여 townManager 에서 towns 배열 생성하는 로직을 서버에서 수행하도록 한다.

    - port : 3000
    - static 폴더 : public 폴더 내 render 모듈, 이벤트,핸들러 모듈, css 를 가진다.

  - 폴더 구조 분리 : townManager, town, constants 모두 server 폴더로 옮긴다.
    - 서버에서 towns 데이터를 JSON 형태로 보내고, index.js 에서 데이터를 fetch 하여 render 한다.
    - 기존에 index.js 에서 실행하던 함수들 대부분 서버에서 실행하고 render 만 수행하도록 변경.
  - 서버 get ' / ' url : index.html 을 보낸다.
  - 서버 get ' /towns ' url : townManager 인스턴스 생성하여 towns 를 만들고 towns 를 JSON 형태로 보낸다.
- querySelector 구현
  - DFS 사용하여 getElementByClassName 함수를 만든다.

    - stack : start 요소만 가지고 시작한다.
    - stack 에서 탐색 노드를 pop 하고 className 요소가 없을 경우 자식 요소를 stack 에 추가한다. 이후 stack 이 빌 때까지 반복한다.

  - 초기에 element.className === className 으로 탐색하였으나, class 가 2개 이상인 경우 탐색이 불가하여 classList 를 활용했다.
  - document 나 비요소 노드(텍스트, 주석 등) 는 classList 가 없어서 탐색이 불가하다.
    - 따라서 startElement 는 document.children[0] 즉, html 요소로 지정한다.
    - el.childNodes 는 비요소 노드도 포함하여 탐색이 불가하다.
  - classList 는 DOMTokenList 라는 유사배열객체로, contains 메서드를 사용하여 포함된 요소를 찾을 수 있다.
  ```javascript
  function getElementByClassName(className) {
    const startEl = document.children[0];
    const stack = [startEl];
    while (stack.length) {
      const curEl = stack.pop();
      if (curEl.classList.contains(className)) {
        return curEl;
      }
      if (curEl.children) {
        stack.push(...curEl.children);
      }
    }
    return null;
  }
  ```

#### 내일 생각해 볼 것

- handler : renderTownInfo() 의 매개변수 towns 를 sorted 전에 실행해야 할 듯.
- colorTowns 도 render 로 옮겨도 될 듯?
