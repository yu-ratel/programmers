function solution(a, b) {
  const odd_Even = (num) => num % 2 === 0 ? 0 : 1;
  
  if (odd_Even(a) && odd_Even(b)) return (a * a) + (b * b);
  if (odd_Even(a) || odd_Even(b)) return 2 * (a + b);
  return Math.abs(a - b);
}

let a = 2;
let b = 4;

console.log(solution(a, b));