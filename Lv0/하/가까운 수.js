function solution(array, n) {
  const absNumber = (num) => Math.abs(num);

  return array.sort((a, b) => absNumber(n - a) - absNumber(n - b) || a - b)[0];
 }

let array = [3, 10, 28];
let n = 20;

console.log(solution(array, n));

//정렬은 수를 바꾸는게 아니라 위치를 바꾸는 것