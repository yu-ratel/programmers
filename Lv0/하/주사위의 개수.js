function solution(box, n) {
  return box.reduce((acc, cur) => acc *= Math.floor(cur / n), 1);
} 

let box = [10, 8, 6];
let n = 3;

console.log(solution(box, n));