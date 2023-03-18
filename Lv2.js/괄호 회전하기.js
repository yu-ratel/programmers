function solution(s) {
  let answer = 0;
  let list = s.split("");
  const open = ["[", "(", "{"];
  const close = ["]", ")", "}"];
  for (let i = 0; i < s.length; i++) {
    let cnt = 0;
    let stack = [];
    while (cnt != list.length) {
      if (close.includes(list[0])) {
        stack.push(1);
        break;
      }
      if (open.includes(list[cnt])) {
        stack.push(list[cnt]);
        cnt++;
      } else {
        if (
          (stack[stack.length - 1] === "[" && list[cnt] === "]") ||
          (stack[stack.length - 1] === "(" && list[cnt] === ")") ||
          (stack[stack.length - 1] === "{" && list[cnt] === "}")
        ) {
          stack.pop();
          cnt++;
        } else {
          stack.push(list[cnt]);
          cnt++;
        }
      }
    }
    if (stack.length === 0) answer++;
    list.push(list.shift());
  }
  return answer;
}

let s = "[](){}";
console.log(solution(s));
