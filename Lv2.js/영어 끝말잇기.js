function solution(n, words) {
  let stack = [words[0]];
  let i = 1;
  let count = 1;
  while (i != words.length) {
    if (count === n) {
      count = 1;
    } else count++;
    if (stack[i - 1].split("").pop() != words[i].split("").shift()) {
      break;
    }
    stack.push(words[i]);
    i++;
    if (new Set(stack).size != stack.length) {
      stack.pop();
      break;
    }
  }
  if (words.length === stack.length) return [0, 0];
  return [count, Math.floor(stack.length / n) + 1];
}

let n = 3;
let words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

console.log(solution(n, words));
