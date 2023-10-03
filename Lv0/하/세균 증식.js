function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n += n
  }
  return n;
}

let n = 7;
let t = 15;

console.log(solution(n, t));