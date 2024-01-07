function solution(myStr) {
  let answer = [];
  let separator = ['a', 'b', 'c'];
  let tmp = '';

  for (let i = 0; i < myStr.length; i += 1) {
    if (separator.includes(myStr[i])) {
      if (tmp) answer.push(tmp);
      tmp = '';
      continue;
    }

    tmp += myStr[i];
  }

  if (tmp) answer.push(tmp);
  
  return answer.length === 0 ? 	["EMPTY"] : answer;
}

let myStr = "baconlettucetomato";

console.log(solution(myStr));