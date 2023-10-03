function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

let number = 60;
let n = 2;
let m = 3;

console.log(solution(number, n, m));