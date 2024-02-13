function solution(intStrs, k, s, l) {
  const answer = [];

  intStrs.forEach((str) => {
    const num = str.slice(s, s + l); 
    if(num > k) answer.push(Number(num));
  });

  return answer;
}

let intStrs = ["0123456789","9876543210","9999999999999"];
let k = 50000;
let s = 5;
let l = 5;

console.log(solution(intStrs, k, s, l));