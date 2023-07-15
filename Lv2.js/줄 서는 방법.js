function solution(n, k) {
  const answer = [];
  const list = new Array(n).fill(0).map((el, i) => (el = i + 1));
  let max = list.reduce((a, c) => a * c, 1);
  // max가 이렇게 되는 이유

  while (answer.length < n) {
    max = max / list.length;
    answer.push(...list.splice(Math.floor((k - 1) / max), 1));
    k = k % max;
  }

  return answer;
}
let n = 3;
let k = 5;

console.log(solution(n, k));

//순열말고 몫과 나머지로 구하는 문제 다시 해보자.
