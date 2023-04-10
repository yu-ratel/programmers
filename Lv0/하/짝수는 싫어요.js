function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }

  answer.sort((a, b) => a - b);
  return answer;
}

let n = 10;
console.log(solution(n));
