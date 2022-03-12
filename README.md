- [x] object.assign()으로 스타일 한번에 변경하는 방법으로 dom 변경 최소화

- [x] 매직넘버 리팩토링

- [x] 폴더구조 변경

  - postbox, town을 클래스로 변경
  - 사용하는 상수를 constant 폴더에 모아놓는 방식으로 변경
  - Template을 클래스로 만들고, postbox와 town은 상속받아서 사용

    ```js
    class Template {
      constructor() {
        this.size = size;
      }
      render() {}
    }
    ```

    ```js
    class Town extends Template {
      constructor(size) {
        super(size);
      }
      render() {
        return super.render();
      }
    }
    ```

    ```js
    class Post extends Template {
      constructor(size) {
        super(size);
      }
      render() {
        return super.render();
      }
    }
    ```

- [x] 탐색 api 구현

  - getClassNameAll()
  - getClassName()

    ```js
    for (let items in childNodes){
      if( childNodes.contains(특정클래스) {
        // 로직
      }
      }
    ```

- [x] 버튼이벤트

  - reset(): 새로고침
  - renderResult(): 결과보여주기

- [x] setTimeout()(1초 딜레이)

- [x] 정렬 api
  - quickSort알고리즘 사용
  - 배열의 요소로 객체를 받아서, 객체의 특정 프로퍼티 기준으로 정렬
