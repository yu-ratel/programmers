function solution(binomial) {
  let [a, op, b] = binomial.split(' ');
  
  if (op === "+") return (a * 1) + (b * 1);
  if (op === "-") return (a * 1) - (b * 1);
  if (op === "*") return (a * 1) * (b * 1);
}

let binomial = "43 + 12";

console.log(solution(binomial));