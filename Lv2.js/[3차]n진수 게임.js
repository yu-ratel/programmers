function solution(n, t, m, p) {
  let answer = "";
  let cnt = 0;
  let list = "";

  while (list.length < t * m) {
    list += cnt.toString(n).toUpperCase();
    cnt++;
  }

  for (let i = p - 1; i < t * m; i += m) {
    answer += list[i];
  }

  return answer;
}

let n = 2;
let t = 4;
let m = 2;
let p = 1;

console.log(solution(n, t, m, p));
