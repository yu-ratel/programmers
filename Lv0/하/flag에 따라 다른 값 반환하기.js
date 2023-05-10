function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
let a = -4;
let b = 7;
let flag = true;

console.log(solution(a, b, flag));
