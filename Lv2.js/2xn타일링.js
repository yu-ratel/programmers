function solution(n) {
  const answer = [1, 1];

  for (let i = 2; i <= n; i++) {
    answer.push((answer[i - 1] % 1000000007) + (answer[i - 2] % 1000000007));
  }

  return answer[n] % 1000000007;
}

let n = 4;
console.log(solution(n));
