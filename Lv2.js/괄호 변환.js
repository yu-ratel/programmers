function solution(p) {
  let answer = "";
  let [left, rigth] = [0, 0];
  let check = false;

  if (p.length === 0) return "";

  for (let i = 0; i < p.length; i += 1) {
    if (p[i] === "(") left += 1;
    if (p[i] === ")") rigth += 1;

    if (rigth > left) check = true;
    if (rigth === left) {
      if (check) {
        answer += "(";
        answer += solution(p.slice(i + 1, p.length));
        answer += ")";

        for (let j = 1; j < i; j++) {
          if (p[j] == ")") answer += "(";
          if (p[j] == "(") answer += ")";
        }
        return answer;
      } else {
        answer += p.slice(0, i + 1);
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}
let p = "()))((()";
console.log(solution(p));
