
#### 우체통 마을 만들기

#### 구현 checklist

- [x] 랜덤하게 마을 생성하기
    - [x] 랜덤한 기준점, 높이, 너비를 가지도록 생성 - Town Class
    - [x] 각 마을들이 겹치지 않도록 마을 배열 구성 - TownManager Class
        - 정해진 개수의 랜덤 마을 생성 후 기존 마을들과 겹치지 않는 지 확인 후 선별한다.
    - [x] 랜덤하게 우체통을 가지도록 생성 - Town Class
    - [x] 생성된 마을 순서대로 이름 지정 - TownManager Class
- [x] 마을 정보를 활용하여 rendering
    - 구성: 마을 div > 우체통 div, 이름 div
    
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
                    
                    - 1) 마을이 다른 마을의 내부에 위치하는지, 2) 마을이 다른 마을의 외부의 위치하는지 확인
                    
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
    
    - 우체통과 이름이 마을 영역 안으로 들어가므로 크기를 고려하여 MARGIN 을 넣어 겹친다고 보는 범위를 더 크게 한다.
    
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
#### 내일 생각해 볼 것
- get4location : town class 로 옮겨도 될 듯?
- 몇가지 magic num : 우체통 확률 등
- 기준점 설정 max 를 고려하여 width 가 정해져야 하지 않을까?