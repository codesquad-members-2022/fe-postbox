const 마을정보가져오기 = async () => {
  const res = await fetch("http://127.0.0.1:3000/town");
  return res.json();
};

Array.prototype.파크옐로우정렬 = function (callback) {
  const arr = this;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      const a = arr[k];
      const b = arr[k + 1];
      const diff = callback(a, b);
      if (diff > 0) {
        arr[k] = b;
        arr[k + 1] = a;
      }
    }
  }
  return arr;
};

const dfs = (시작점, 클래스) => {
  const 자식노드들 = [...시작점.children];
  const 찾은노드 = 자식노드들.find((자식노드) =>
    자식노드.classList.contains(클래스)
  );
  if (찾은노드) {
    return 찾은노드;
  } else {
    return 자식노드들.map((자식노드) => dfs(자식노드, 클래스)).find((v) => v);
  }
};

const 클래스로요소찾기 = (클래스) => {
  return dfs(document.body, 클래스);
};

const 딜레이 = (밀리초) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 밀리초);
  });
};

export { 마을정보가져오기, 클래스로요소찾기, 딜레이, dfs };
