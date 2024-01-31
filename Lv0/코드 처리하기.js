function solution(code) {
  let answer = '';
  let mode = 0;

  for (let i = 0; i < code.length; i+= 1) {
    if (mode === 0) {
      if (code[i] === '1') {
        mode = 1;
        continue;
      }
      if (i % 2 === 0) answer += code[i];
    }
    if (mode === 1) {
      if (code[i] === '1') {
        mode = 0;
        continue;
      }
      if (i % 2 === 1) answer += code[i];
    }
  }

  return answer.length === 0 ? 'EMPTY' : answer;
}

let code = "abc1abc1abc";
console.log(solution(code));