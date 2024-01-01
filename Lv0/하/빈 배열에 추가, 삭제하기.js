function solution(arr, flag) {
  let answer = [];

  flag.forEach((el, idx) => {
    if (el) {
      for (let i = 0; i < arr[idx] * 2; i += 1) answer.push(arr[idx]);
    }
    if (!el) {
      for (let i = 0; i < arr[idx]; i += 1) answer.pop();
    }
  })

  return answer;
}

let arr = [3, 2, 4, 1, 3];
let flag = [true, false, true, false, false];

console.log(solution(arr, flag));