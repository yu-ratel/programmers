function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else stack.pop();
  }
  return stack.length;
}
let s = "baabaa";
console.log(solution(s));
