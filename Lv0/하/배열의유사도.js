function soluition(s1, s2) {
  let answer = 0;
  s1.map((el) => (s2.includes(el) ? answer++ : null));
  return answer;
}

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];

console.log(soluition(s1, s2));
