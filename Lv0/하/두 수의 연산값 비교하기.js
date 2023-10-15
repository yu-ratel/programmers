function solution(a, b) {
  return Math.max((a + '' + b), (2 * a * b)); 
}

let a = 2;
let b = 91;

console.log(solution(a, b));