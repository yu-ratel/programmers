function solution(n, a, b) {
  let answer = 0;

  for (let i = 0; i < n / 2; i++) {
    let check = Math.floor(n / a) === Math.floor(n / b);
    if (a === b && check) {
      break;
    } else {
      answer++;
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
    }
  }

  return answer;
}
let n = 8;
let a = 4;
let b = 5;
console.log(solution(n, a, b));
