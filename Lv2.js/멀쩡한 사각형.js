function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

function solution(w, h) {
  let answer = w * h;
  let point = w + h - gcd(w, h);

  return answer - point;
}

let W = 8;
let H = 12;

console.log(solution(W, H));
