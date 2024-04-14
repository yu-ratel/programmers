function solution(t, p) {
  let answer = 0;
  let cut = p.length;
  for (let i = 0; i < t.length - cut; i++) {
    let num = t.slice(i, i + cut);
    if (Number(num) <= Number(p)) answer++;
  }
  return answer;
}

let t = "3141592";
let p = "271";

console.log(solution(t, p));

// 다시 풀기
function solution(t, p) {
  const cutLength = p.length;
  const substrings = t
    .split("")
    .map(
      (_, idx) => idx <= t.length - cutLength && t.slice(idx, idx + cutLength)
    );

  return substrings.filter((num) => num <= p && num !== false).length;
}

let t = "3141592";
let p = "271";

console.log(solution(t, p));
