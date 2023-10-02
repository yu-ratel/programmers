function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2
}

let n = 144;
console.log(solution(n));