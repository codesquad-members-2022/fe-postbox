export {
  getElementByClassName,
  getElementsByClassName,
} from '../dom/selector.js';

export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  return element;
};

export const addClass = (className, element) => {
  element.classList.add(className);
};

export const range = (from, to) => {
  const diff = Math.abs(to - from);
  return (Math.random() * diff + from) >> 0;
  // from ~ to-1
};

export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// comparison(a, b)
// return < 0: [a, b]
// return > 0: [b, a]
// return = 0: [a, b]
export const sort = (arr, comparison = (a, b) => a - b) => {
  const sortedArr = [...arr];

  const quickSort = (arr, start, end) => {
    if (start >= end) return;

    const pivot = start;
    let i = start + 1;
    let j = end;
    let temp;

    while (i <= j) {
      // 엇갈릴 때 까지 반복
      while (i <= end && comparison(arr[i], arr[pivot]) <= 0) {
        // 정렬 순서상 pivot 뒤에오는 요소를 만날 때 까지
        i++;
      }
      while (j > start && comparison(arr[j], arr[pivot]) >= 0) {
        // 정렬 순서상 pivot 앞에오는 요소를 만날 때 까지
        j--;
      }

      if (i > j) {
        // 엇갈리면 j, pivot 스왑
        temp = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = temp;
      } else {
        // 엇갈리지 않았다면 i, j 스왑
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }

    // j를 기준으로 좌,우 두 개의 배열로 나눔
    quickSort(arr, start, j - 1);
    quickSort(arr, j + 1, end);
  };

  quickSort(sortedArr, 0, sortedArr.length - 1);
  return sortedArr;
};
