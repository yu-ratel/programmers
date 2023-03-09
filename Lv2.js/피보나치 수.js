function solution(n) {
  let answer = 0;
  let a = 1;
  let b = 0;

  for (let i = 2; i <= n; i++) {
    answer = (a + b) % 1234567;
    b = a;
    a = answer;
  }
  return answer;
}

let n = 3;
console.log(solution(n));
