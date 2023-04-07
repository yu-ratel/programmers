function solution(number, k) {
  let answer = number.split("").reverse();
  let stack = [];
  let cnt = k;

  while (cnt && answer.length) {
    stack.push(answer.pop());
    while (stack[stack.length - 1] < answer[answer.length - 1] && cnt) {
      stack.pop();
      cnt--;
    }
  }

  if (cnt) return stack.join("").slice(0, stack.length - k);

  return stack.join("") + answer.reverse().join("");
}

let number = "4321";
let k = 1;

console.log(solution(number, k));
