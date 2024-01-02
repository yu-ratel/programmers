function solution(s) {
  let stack = [];

  s.split(' ').forEach((v) => v === 'Z' ? stack.pop() : stack.push(v));

  return stack.reduce((acc, cur) => acc += Number(cur), 0);
}

let s = "1 2 Z 3";

console.log(solution(s));