function solution(s) {
  let answer = s.length;

  if (answer === 1) return 1;

  for (let i = 1; i <= parseInt(s.length / 2); i += 1) {
    let sub = "";
    let cnt = 1;

    for (let j = 0; j < s.length; j += i) {
      const fm = s.substr(j, i);
      const sm = s.substr(j + i, i);

      if (fm === sm) cnt += 1;
      else {
        sub = cnt > 1 ? sub + cnt + fm : sub + fm;
        cnt = 1;
      }
    }

    answer = Math.min(answer, sub.length);
  }
  return answer;
}
let s = "aabbaccc";
console.log(solution(s));
