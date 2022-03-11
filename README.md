# 📮 빨간 우체통을 찾아라!

## 필요한 데이터
  - 마을의 총 개수
  - 마을의 top-left 좌표(랜덤)
  - 마을의 width, height (랜덤)
  - 마을의 나머지 좌표 (top-right, bottom-left, bottom-right) (계산)
  - 마을의 absolute 좌표
  - 마을의 부모 마을의 인덱스(없을 경우 null)
  - 마을의 이름
  - 우체통의 총 개수
  - 우체통의 width (우체통의 width = 우체통의 height)
  - 우체통이 들어갈 마을의 인덱스

## 우체통 조건
- 개수 범위: 1 ~ 8개
- width 범위: 3% ~ 10%

## 마을 조건
- 개수 범위: 우체통의 개수 ~ 26개 (이름으로 사용할 알파벳의 개수)
- top-left 좌표의 범위: 0 ~ 80%
- width, height 범위: 20% ~ (100% - (top-left 좌표의 범위))
  - top-left 좌표 + width, height <= 100
  - top-left 좌표에 맞게 범위가 유동적으로 변한다.

## 구현 과정
### 데이터 생성
- 마을 개수, top-left 좌표, 우체통의 개수, 우체통 width, height, 우체통이 들어갈 마을의 인덱스를 랜덤으로 정한다.
- 마을의 나머지 좌표를 구한다.
- 마을의 부모 마을 여부를 확인한다.
  - A 마을의 좌표: [(Ax, Ay), (Ax + Awidth, Ay), (Ax, Ay + Aheight), (Ax + Awidth, Ay + Aheigth)]
  - B 마을의 좌표: [(Bx, By), (Bx + Bwidth, By), (Bx, By + Bheight), (Bx + Bwidth, By + Bheigth)]
  - if (Ax <= Bx && Bx >= Ax + Awidth) || (Ay <= By && By >= Ay + Aheigth)
  해당 조건을 만족하면, A는 B의 부모 마을이다.
- 때문에 부모 마을의 영역을 넘지 않으면 B의 width, height를 유지하고, 넘을 시 넘어가는 크기만큼 빼서 재저장한다.
- 부모 마을이 있을 경우, 자신의 좌표와 부모 마을의 좌표 차이를 마을의 absolute의 top, left로 사용하기 위해 저장한다.  
(마을의 position을 absolute로 사용하기 위해서는 부모 마을 기준으로의 좌표가 필요하므로)
- 단 부모 마을의 인덱스가 우체통이 들어갈 인덱스와 일치한다면, 계산한 absolute의 top, left에서 우체통의 크기를 더해주고, (우체통 크기 + 마을의 좌표 + 마을의 크기)가 100%가 넘을 시, 넘치는 만큼 마을의 크기를 줄여준다.
- 마을 이름은 알파벳 대문자순으로 charcode를 이용하여 정해준다.

### 렌더링
- 부모 마을이 있는 경우, 부모 마을의 자식으로 추가해준다.
```javascript
// before
`<div class="town ${className}">${childTown}</div>`

//after
`<div class="town ${className}">
  <div class="town">${childTown}</div>
</div>`
```
- 부모 마을이 없는 경우, 형제 마을로 추가해준다.
```javascript
let mapTemplate +=`<div class="town ${className}">${childTown}</div>
```
- 우체통이 있는 마을의 경우, 우체통을 자식으로 추가해준다.
- 우체통이 있는 마을의 경우, `${className}`에 "postbox-town"을 넣어준다.
```javascript
// before
`<div class="town ${className}">${childTown}</div>`

//after
`<div class="town postbox-town">
  <div class="postbox"><span>📮</span></div>
  ${childTown}
</div>`
```
- 저장해놓은 마을과 우체통의 absolute 좌표와 width, height를 토대로 style을 정해준다.

## 디렉토리 구조

```
├── 📁 static
│   ├── 📁 resources
│   │   ├── 📁 css
│   │   │   ├── reset.css
│   │   │   └── style.css
│   └── 📁 src
│       ├── 📁 controllers
│       │   └── postboxButton.js
│       ├── 📁 models
│       │   ├── 📁 data
│       │   │   ├── town.js (json)
│       │   │   └── postbox.js (json)
│       │   ├── 📁 dataCreator
│       │   │   ├── town.js
│       │   │   └── postbox.js
│       │   └── dataMangement.js
│       ├── 📁 utils
│       │   └── util.js
│       ├── 📁 views
│       │   ├── 📁 components
│       │   │   ├── town.js
│       │   │   └── postbox.js
│       │   ├── map.js
│       │   └── postboxInfo.js
│       └── main.js
└─── index.html
```

## DOM API 구현

### getElementByClassName

- DFS 방식을 사용하여 자식 노드로 들어가 탐색하는 방식을 재귀로 구현한다.
- parentElement와 className을 인자로 받아 탐색 시작점을 지정할 수 있다.

### getElementsByClassName

- getElementByClassName과 탐색 방식은 같지만 중지하지 않고 모든 노드를 탐색한다.
- 제일 자식 노드로 도착했을 시 빈 배열을 반환하여 해당 배열을 저장하고 그 배열에 push 하고, 반환하여 저장하고 push 하고를 반복하여 마지막 재귀를 탈출하면 찾은 요소들이 모두 반환된다.

## sort 메서드 구현

- 시간복잡도가 O(n log n)이고, 비교적 구현이 복잡하지 않은 병합정렬로 구현
