function solution(n) {
  let answer = Array.from({length: n}, () => Array.from({length: n}, () => 0))
  
  answer.forEach((el, idx) => el[idx] = 1);
  
  return answer;
}

let n = 3;

console.log(solution(n));