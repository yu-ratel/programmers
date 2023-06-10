function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

let num_list = [2, 1, 6];
let n = 1;

console.log(solution(num_list, n));
