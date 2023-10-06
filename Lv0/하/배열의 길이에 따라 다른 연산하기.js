function solution(arr, n) {
  return arr.length % 2 === 1 
  ? arr.map((el, i) => i % 2 === 0 ? el + n : el)
  : arr.map((el, i) => i % 2 === 1 ? el + n : el);
}

let arr = [49, 12, 100, 276, 33];
let n = 27;

console.log(solution(arr, n));