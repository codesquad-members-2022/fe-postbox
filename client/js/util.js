const mergeSort = (arr, callback = null) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), callback);
  const right = mergeSort(arr.slice(mid), callback);
  return merge(left, right, callback);
};

const merge = (left, right, callback) => {
  const arr = [];
  let [i, j] = [0, 0];
  while (i < left.length && j < right.length) {
    if (callback ? callback(left[i], right[j]) : left[i] <= right[j]) {
      arr.push(left[i++]);
    } else {
      arr.push(right[j++]);
    }
  }
  while (i < left.length) {
    arr.push(left[i++]);
  }
  while (j < right.length) {
    arr.push(right[j++]);
  }
  return arr;
};

const delay = (data, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), time);
  });
};

export { mergeSort, delay };
