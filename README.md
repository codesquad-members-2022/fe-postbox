- [x] object.assign()으로 스타일 한번에 변경하는 방법으로 dom 변경 최소화

- [x] 매직넘버 리팩토링

- [x] 폴더구조 변경
  - postbox, town을 클래스로 변경
  - 사용하는 상수를 constant 폴더에 모아놓는 방식으로 변경

```js
class town extends template {
  constructor() {
    super();
  }
}
```

```js
class template {
  constructor() {
    this.size = size;
  }
  render() {}
}
```

```js
class post extends template {
  constructor() {
    super();
  }
}
```
