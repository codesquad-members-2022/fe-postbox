# javascript-postbox
![map](https://user-images.githubusercontent.com/17706346/157436593-d87c6f60-cff9-40a7-82ed-214479e5e8ac.png)

### 우체통 조건
- 우체통의 개수는 2 ~ 4개 사이에서 랜덤으로 정한다.
- 우체통의 위치는 마을의 왼쪽 상단 모서리에 위치하도록 한다.
- 우체통의 width는 10% ~ 25% 사이에서 랜덤으로 정한다.
- 전체 마을에서 우체통이 들어갈 마을의 인덱스를 랜덤으로 정한다.
- 좌표 0 ~ 25% / 0 ~ 50%  
우체통 10% ~ 25%  
마을 넓이 50% ~ (100% -좌표)

### 마을 조건
- 마을의 개수는 우체통의 개수의 2배에서 3배 사이에서 랜덤으로 정한다.
- 하나의 마을에 너무 몰리지 않도록, 마을의 개수를 4로 나눈 나머지 개수의 마을은 1, 2, 3, 4 grid 중에 랜덤으로 들어간다.
(ex. 마을의 개수가 10개인 경우 1~8개는 돌아가며 4개의 화면에 들어가고 나머지 2개는 들어갈 위치가 랜덤으로 정해진다.)
- 마을의 left, top 좌표는 0 ~ 부모 박스의 가로, 세로 1/2 중에서 랜덤으로 정한다.
- 마을의 가로, 세로는 부모 박스의 가로, 세로의 1/2 ~ 부모박스의 가로, 세로 - left, top 좌표 중에서 랜덤으로 정한다.
- 우체통이 들어가기로 정해진 마을의 자식 마을의 left, top 좌표는 우체통의 최대 크기 ~ 부모 마을의 가로, 세로 1/2 중에서 랜덤으로 정한다.(우체통이 왼쪽 상단에 있으므로)

### 디렉토리 구조
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
│       │   ├── 📁 dataManager
│       │   │   ├── town.js
│       │   │   └── postbox.js
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