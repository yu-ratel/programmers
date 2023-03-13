function solution(n) {
  let answer = 0;
  let a = 1;
  let b = 1;
  if (n === 1) return 1;
  for (let i = 2; i <= n; i++) {
    answer = (a + b) % 1234567;
    b = a;
    a = answer;
  }
  return answer;
}

let n = 1;
console.log(solution(n));

// 피보나치의 대해서 기억하고 있을 것.
