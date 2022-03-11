import { 클래스로요소찾기, 딜레이 } from "./utils.js";
const 우체통마을들 = [];

const 우체통크기확인 = (마을) =>
  [...마을.children].find((마을요소) => 마을요소.classList.contains("box"))
    .dataset.size;

const 우체통마을이름들확인 = (우체통마을들) =>
  우체통마을들.map((마을) => 마을.dataset.name);

const 마을정보출력 = () => {
  const 우체통마을이름들 = 우체통마을이름들확인(우체통마을들);

  클래스로요소찾기("townCount").innerHTML = `
    ${우체통마을이름들.join(", ")} 총 ${우체통마을이름들.length}개의 마을입니다.
  `;

  우체통마을들.파크옐로우정렬((a, b) => 우체통크기확인(b) - 우체통크기확인(a));

  클래스로요소찾기(
    "boxSize"
  ).innerHTML = `우체통은 크기는 ${우체통마을이름들확인(
    우체통마을들
  )} 순입니다.`;
};

const 우체통마을색상변경 = (마을) => {
  마을.style.border = "1px solid #f00";
};

const 우체통마을찾기 = (시작점) => {
  const 자식노드들 = [...시작점.children];

  const 찾은노드들 = 자식노드들.filter((자식노드) =>
    자식노드.classList.contains("hasBox")
  );
  if (찾은노드들.length) {
    우체통마을들.push(...찾은노드들);
  }
  자식노드들.forEach((자식노드) => 우체통마을찾기(자식노드));
};

const 컨트롤러 = () => {
  const 버튼 = 클래스로요소찾기("checkBtn");
  버튼.addEventListener("click", async () => {
    우체통마을찾기(클래스로요소찾기("townMap"));
    마을정보출력();
    await 딜레이(2000);
    우체통마을들.forEach((마을) => {
      우체통마을색상변경(마을);
    });
  });
};

export default 컨트롤러;
