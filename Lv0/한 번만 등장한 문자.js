function solution(s) {
  let answer = '';
  let sMap = new Map();

  s.split('').forEach((el) => {
    sMap.get(el) ? sMap.set(el, sMap.get(el) + 1) : sMap.set(el, 1);
  });

  for ([key, value] of sMap) {
    if (value === 1) answer += key;
  }

  return answer.split('').sort().join('');

}

let s = "abdc";

console.log(solution(s));
