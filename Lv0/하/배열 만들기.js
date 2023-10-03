function solution(n, k) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) answer.push(i);    
  }

  return answer;
}

let n = 10;
let k = 3; 

console.log(solution(n, k));