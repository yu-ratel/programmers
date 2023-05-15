function solution(common) {
  let answer = 0;
  let plus = common[1] - common[0];
  let multiply = common[1] / common[0];
  common[2] - common[1] === common[1] - common[0]
    ? (answer = plus + common[common.length - 1])
    : (answer = multiply * common[common.length - 1]);
  return answer;
}

let common = [1, 2, 3, 4];
console.log(solution(common));
