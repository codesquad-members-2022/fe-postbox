export function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);

  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    left[0].size.substr(0, 1) <= right[0].size.substr(0, 1)
      ? sortedArr.push(right.shift())
      : sortedArr.push(left.shift());
  }

  return [...sortedArr, ...left, ...right];
}
