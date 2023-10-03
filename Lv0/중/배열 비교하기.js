const arrCompare = (arr1, arr2) => {
  return arr1.length > arr2.length ? 1 : -1;
}

const numberCompare = (arr1, arr2) => {
  let sum1 = arr1.reduce((acc, cur) => acc += cur, 0);
  let sum2 = arr2.reduce((acc, cur) => acc += cur, 0);

  if (sum1 === sum2) return 0;
  if (sum1 > sum2) return 1;
  return -1;
}

function solution(arr1, arr2) {
  return arr1.length === arr2.length ? numberCompare(arr1, arr2) : arrCompare(arr1, arr2);
}

let arr1 = [49, 13];
let arr2 = [70, 11, 2];

console.log(solution(arr1, arr2));