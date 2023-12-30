function solution(i, j, k) {
  const list = Array.from({length: j - i + 1}).fill().map((v, idx) =>  v = (idx + i));
  return list.join('').split('').filter((el) => el === k + '').length;

}

let i = 1;
let j = 13;
let k = 1; 

console.log(solution(i, j, k));