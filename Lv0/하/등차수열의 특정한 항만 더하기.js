function solution(a, d, included) {
  return Array(included.length).fill(a).map((v, i) => v += i * d).filter((_, i) => included[i]).reduce((acc, cur) => acc += cur);
}

let a = 3; 
let d = 4;
let included = [true, false, false, true, true];

console.log(solution(a, d, included));