function solution(arr, k) {
  return arr.map((el) => k % 2 === 1 ? el * k : el + k);
}

let arr = [1, 2, 3, 100, 99, 98];
let k = 3;

console.log(solution(arr, k));