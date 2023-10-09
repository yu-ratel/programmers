function solution(my_string, pat) {
  return my_string.split('').map((v) => v === 'A' ? 'B' : 'A').join('').includes(pat)
  ? 1
  : 0;
}

let my_string = "ABBAA";
let pat = "AABB";

console.log(solution(my_string, pat));