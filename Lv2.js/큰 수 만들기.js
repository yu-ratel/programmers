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

// js 의 배열과정 시간복잡도는 pop() 으로 뒤에를 하나씩 삭제해주는게 훨씬 빠르다. 앞에서부터 하나씩 제거하면
// 뒤에있던 것들이 앞으로 땡겨가는 과정이 붙기 때문에.
