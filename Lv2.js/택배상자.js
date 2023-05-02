function solution(order) {
  let answer = 0;
  let stack = [];
  for (let i = 1; i <= order.length; i++) {
    stack.push(i);
    while (stack.length > 0 && stack[stack.length - 1] === order[answer]) {
      stack.pop();
      answer++;
    }
  }
  return answer;
}

let order = [4, 3, 1, 2, 5];
console.log(solution(order));
