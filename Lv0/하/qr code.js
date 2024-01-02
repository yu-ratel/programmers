function solution(q, r, code) {
  return code.split('').filter((_, idx) => idx % q === r).join('');
}

let q = 3;
let r = 1;
let code = "qjnwezgrpirldywt";

console.log(solution(q, r, code));