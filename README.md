# javascript-postbox

### Class 마을

- 상태
  - 위치
  - 우체통 위치
- 메소드
  - getLocation
  - getWidth
  - getHeight
  - get기준점

### 렌더

- 역할
  - 초기 화면 그리기
  - 빨간색으로 칠하기

### 마을 관리자

- 마을 지도
  - 마을 인스턴스들을 가지고 있음.
  - 랜더함수의 파라미터로 사용됨.
- 마을 지도에 마을, 우체통 추가하는 validator 역할 수행하는 로직.

### 이벤트

- `빨간 우체통 확인` 버튼 누르면 찾는 로직 실행

### 정렬

- 배열의 길이가 10 ~ 20일 경우 선택, 삽입 정렬이 사용된다고 함.

### Validator

- 마을을 만들 때 마을 지도안에 있는 위치, 우체통 위치 고려해서 판별.

### Promise

### express

- 랜덤한 마을 위치 클라이언트에서 구현 후 나중에 서버에서 처리

### TODO

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
- [ ] querySelector 구현
- [x] 버튼 이벤트
  - [ ] 빨간색으로 변경
- [ ] setTimeout에 Promise 패턴 적용
- [x] 폴더 구조 변경
- [ ] 정렬 알고리즘 구현
- [ ] 우체통 사이즈 추가
- [ ] 서버
  - [ ] express 띄우기
  - [ ] JSON 생성
  - [ ] 마을 위치 랜덤하게 생성하는 로직 서버에서 처리
- [ ] JSON fetch
