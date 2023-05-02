function solution(start, end) {
  let answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;
}

let start = 3;
let end = 10;

console.log(solution(start, end));
