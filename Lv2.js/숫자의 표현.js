function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum >= n) {
        break;
      }
    }
    sum === n && answer++;
  }

  return answer;
}

let n = 15;
console.log(solution(n));
