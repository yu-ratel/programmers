function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
      let idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
    console.log(stack);
  }

  return answer;
}

let numbers = [2, 3, 3, 5];
console.log(solution(numbers));
